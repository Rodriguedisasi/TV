(function (global) {
    function invoke(action, args) {
        return new Promise(function (resolve, reject) {
            if (!global.cordova || !global.cordova.exec) {
                reject(new Error('cordova_unavailable'));
                return;
            }
            global.cordova.exec(resolve, reject, 'SecurityBridge', action, args || []);
        });
    }

    var api = {
        status: function () {
            return invoke('status', []);
        },
        deviceId: function () {
            return invoke('deviceId', []);
        },
        secureSet: function (key, value) {
            return invoke('secureSet', [String(key), String(value)]);
        },
        secureGet: function (key) {
            return invoke('secureGet', [String(key)]);
        },
        secureRemove: function (key) {
            return invoke('secureRemove', [String(key)]);
        },
        verifyPins: function (url) {
            return invoke('verifyPins', [url || 'https://firestore.googleapis.com/']);
        }
    };

    global.RodssSecurity = api;

    function showBlocked(report) {
        var reasons = (report && report.reasons) ? report.reasons.join(', ') : 'inconnu';
        var screen = document.createElement('div');
        screen.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#0b0b10;color:#fff;font:16px/1.6 sans-serif;text-align:center;padding:24px';
        screen.textContent = "ROD'SS TV ne peut pas s'exécuter sur cet appareil. Motif : " + reasons;
        document.body.appendChild(screen);
    }

    function onReady() {
        api.status().then(function (report) {
            global.RODSS_SECURITY = report;
            if (report && report.blocked) {
                showBlocked(report);
            }
        }).catch(function () {});

        api.deviceId().then(function (id) {
            global.RODSS_DEVICE_ID = id;
        }).catch(function () {});
    }

    document.addEventListener('deviceready', onReady, false);
})(window);
