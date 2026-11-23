import { readdir, readFile, writeFile, mkdir, copyFile, unlink, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { minify as minifyJs } from 'terser';
import JavaScriptObfuscator from 'javascript-obfuscator';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier-terser';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(projectRoot, 'www');
const outputDir = path.join(projectRoot, 'platforms', 'android', 'app', 'src', 'main', 'assets', 'www');

const cleanCss = new CleanCSS({ level: 2 });

const obfuscatorOptions = {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: false,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: false,
    selfDefending: false,
    stringArray: true,
    stringArrayEncoding: [],
    stringArrayThreshold: 0.75,
    transformObjectKeys: false,
    unicodeEscapeSequence: false
};

const htmlOptions = {
    caseSensitive: true,
    collapseWhitespace: true,
    decodeEntities: false,
    keepClosingSlash: true,
    minifyCSS: false,
    minifyJS: false,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
};

async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walk(fullPath));
        } else if (entry.isFile()) {
            files.push(fullPath);
        }
    }
    return files;
}

async function removeSourceMaps(dir) {
    for (const file of await walk(dir)) {
        if (file.endsWith('.map')) {
            await unlink(file);
            console.log(`Supprimé (source map): ${path.relative(projectRoot, file)}`);
        }
    }
}

async function buildFile(relativePath) {
    const source = path.join(sourceDir, relativePath);
    const target = path.join(outputDir, relativePath);
    await mkdir(path.dirname(target), { recursive: true });
    const extension = path.extname(source).toLowerCase();

    if (extension === '.map') {
        return;
    }

    if (extension === '.js' && path.basename(source) !== 'cordova.js') {
        const original = await readFile(source, 'utf8');
        const minified = await minifyJs(original, {
            compress: true,
            mangle: true,
            format: { comments: false },
            sourceMap: false
        });
        if (!minified.code) {
            throw new Error(`Minification JS vide: ${relativePath}`);
        }
        const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, obfuscatorOptions).getObfuscatedCode();
        await writeFile(target, obfuscated, 'utf8');
        console.log(`JS minifié/obfusqué: ${relativePath} (${original.length} -> ${obfuscated.length} octets)`);
        return;
    }

    if (extension === '.css') {
        const original = await readFile(source, 'utf8');
        const result = cleanCss.minify(original);
        if (result.errors.length > 0) {
            throw new Error(`Erreurs CSS dans ${relativePath}: ${result.errors.join(', ')}`);
        }
        await writeFile(target, result.styles, 'utf8');
        console.log(`CSS minifié: ${relativePath} (${original.length} -> ${result.styles.length} octets)`);
        return;
    }

    if (extension === '.html') {
        const original = await readFile(source, 'utf8');
        const result = await minifyHtml(original, htmlOptions);
        await writeFile(target, result, 'utf8');
        console.log(`HTML minifié: ${relativePath} (${original.length} -> ${result.length} octets)`);
        return;
    }

    await copyFile(source, target);
    console.log(`Copié: ${relativePath}`);
}

async function main() {
    const sourceStat = await stat(sourceDir);
    if (!sourceStat.isDirectory()) {
        throw new Error(`Dossier source introuvable: ${sourceDir}`);
    }
    await mkdir(outputDir, { recursive: true });
    await removeSourceMaps(outputDir);
    const files = await walk(sourceDir);
    for (const file of files) {
        await buildFile(path.relative(sourceDir, file));
    }
    await removeSourceMaps(outputDir);
    console.log(`${files.length} fichiers traites vers ${outputDir}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
