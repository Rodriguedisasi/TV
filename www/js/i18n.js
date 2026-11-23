/* ==========================================
   INTERNATIONALISATION — changement de langue
   Les textes traduits sont marqués dans le HTML par :
     data-i18n="clé"              -> textContent
     data-i18n-html="clé"         -> innerHTML (garde le balisage)
     data-i18n-placeholder="clé"  -> attribut placeholder
   La langue choisie est mémorisée dans localStorage.
   ========================================== */
(function () {
    "use strict";

    var STORAGE_KEY = "rodss_lang";
    var DEFAULT_LANG = "fr";

    var DICT = {
        fr: {
            "nav.direct": "Direct",
            "nav.favorites": "Favoris",
            "nav.subs": "Abonnements",
            "nav.pro": "Espace Pro",
            "nav.settings": "Réglages",
            "search.placeholder": "Rechercher une chaîne ou un flux...",
            "favorites.title": "Mes Favoris",
            "settings.title": "Réglages & Profil",
            "settings.connection": "Statut connexion",
            "settings.subscription": "Abonnement",
            "settings.contact": "Contact / Suggestions",
            "settings.whatsapp": "WhatsApp",
            "settings.call": "Appel",
            "settings.language": "Langue",
            "settings.manage": "Gérer mon abonnement",
            "settings.logout": "Se déconnecter",
            "settings.reload": "Rafraîchir l'application",
            "subs.title": "Abonnements",
            "pro.title": "Espace Professionnel",
            "player.empty.title": "Aucune chaîne disponible",
            "player.empty.text": "La liste des chaînes est vide pour le moment.<br>Elles seront bientôt ajoutées.",
            "channels.empty": "Aucune chaîne trouvée",
            "channels.loading": "Chargement des chaînes…",
            "channels.error": "Impossible de charger les chaînes.",
            "channels.retry": "Réessayer"
        },
        en: {
            "nav.direct": "Live",
            "nav.favorites": "Favorites",
            "nav.subs": "Plans",
            "nav.pro": "Pro Space",
            "nav.settings": "Settings",
            "search.placeholder": "Search a channel or a stream...",
            "favorites.title": "My Favorites",
            "settings.title": "Settings & Profile",
            "settings.connection": "Connection status",
            "settings.subscription": "Subscription",
            "settings.contact": "Contact / Suggestions",
            "settings.whatsapp": "WhatsApp",
            "settings.call": "Call",
            "settings.language": "Language",
            "settings.manage": "Manage my subscription",
            "settings.logout": "Log out",
            "settings.reload": "Refresh the app",
            "subs.title": "Plans",
            "pro.title": "Professional Space",
            "player.empty.title": "No channel available",
            "player.empty.text": "The channel list is empty for now.<br>New channels are coming soon.",
            "channels.empty": "No channel found",
            "channels.loading": "Loading channels…",
            "channels.error": "Unable to load the channels.",
            "channels.retry": "Retry"
        },
        es: {
            "nav.direct": "Directo",
            "nav.favorites": "Favoritos",
            "nav.subs": "Suscripciones",
            "nav.pro": "Espacio Pro",
            "nav.settings": "Ajustes",
            "search.placeholder": "Buscar un canal o un flujo...",
            "favorites.title": "Mis favoritos",
            "settings.title": "Ajustes y perfil",
            "settings.connection": "Estado de conexión",
            "settings.subscription": "Suscripción",
            "settings.contact": "Contacto / Sugerencias",
            "settings.whatsapp": "WhatsApp",
            "settings.call": "Llamada",
            "settings.language": "Idioma",
            "settings.manage": "Gestionar mi suscripción",
            "settings.logout": "Cerrar sesión",
            "settings.reload": "Actualizar la aplicación",
            "subs.title": "Suscripciones",
            "pro.title": "Espacio profesional",
            "player.empty.title": "Ningún canal disponible",
            "player.empty.text": "La lista de canales está vacía por ahora.<br>Pronto se añadirán canales.",
            "channels.empty": "Ningún canal encontrado",
            "channels.loading": "Cargando canales…",
            "channels.error": "No se pudieron cargar los canales.",
            "channels.retry": "Reintentar"
        }
    };

    var LANGUAGES = [
        { code: "fr", label: "Français" },
        { code: "en", label: "English" },
        { code: "es", label: "Español" }
    ];

    function isSupported(code) {
        return Object.prototype.hasOwnProperty.call(DICT, code);
    }

    function readSaved() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            return saved && isSupported(saved) ? saved : null;
        } catch (e) {
            return null;
        }
    }

    function detectLanguage() {
        var saved = readSaved();
        if (saved) return saved;
        var nav = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
        return isSupported(nav) ? nav : DEFAULT_LANG;
    }

    var current = detectLanguage();

    function t(key) {
        var table = DICT[current] || DICT[DEFAULT_LANG];
        if (table[key] !== undefined) return table[key];
        if (DICT[DEFAULT_LANG][key] !== undefined) return DICT[DEFAULT_LANG][key];
        return key;
    }

    function apply() {
        document.documentElement.lang = current;

        var nodes = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
        }

        nodes = document.querySelectorAll("[data-i18n-html]");
        for (var j = 0; j < nodes.length; j++) {
            nodes[j].innerHTML = t(nodes[j].getAttribute("data-i18n-html"));
        }

        nodes = document.querySelectorAll("[data-i18n-placeholder]");
        for (var k = 0; k < nodes.length; k++) {
            nodes[k].setAttribute("placeholder", t(nodes[k].getAttribute("data-i18n-placeholder")));
        }

        nodes = document.querySelectorAll("[data-i18n-label]");
        for (var l = 0; l < nodes.length; l++) {
            nodes[l].setAttribute("aria-label", t(nodes[l].getAttribute("data-i18n-label")));
        }

        // Garde le sélecteur aligné même si la langue est changée par le code
        var select = document.getElementById("appLang");
        if (select && select.value !== current) select.value = current;
    }

    function setLanguage(code) {
        if (!isSupported(code) || code === current) return;
        current = code;
        try {
            localStorage.setItem(STORAGE_KEY, code);
        } catch (e) { /* stockage indisponible : la langue reste valable pour la session */ }
        apply();
        document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: code } }));
    }

    function wireSelector() {
        var select = document.getElementById("appLang");
        if (!select) return;
        select.value = current;
        select.addEventListener("change", function () {
            setLanguage(select.value);
        });
    }

    window.I18N = {
        t: t,
        apply: apply,
        setLanguage: setLanguage,
        languages: LANGUAGES,
        get lang() { return current; }
    };
    // Raccourci global pour le reste de l'application
    window.t = t;

    function start() {
        apply();
        wireSelector();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
