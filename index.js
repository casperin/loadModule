;(function() {
    var modules = {}
    var callbacks = {}

    function loadModule (path, name, cb) {
        // Reuse if script is already loaded
        if (modules[name]) {
            cb(modules[name])
            return
        }

        // Add callback to the callbacks list for that name
        callbacks[name] = callbacks[name] || []
        callbacks[name].push(cb)

        // Load script
        var s = document.createElement('script')
        s.type = 'text/javascript'
        s.src = path.substr(path.length - 3) === '.js' ? path : path + '.js'
        document.body.appendChild(s)
        document.body.removeChild(s)
    }

    var module = {
        set exports (m) {
            // Check validity
            if (!m.name) {
                console.error("Invalid module:", m)
                return
            }

            // Cache the module
            modules[m.name] = m

            // Module has been loaded, and we have callbacks waiting for it
            if (callbacks[m.name]) {
                callbacks[m.name].forEach(function (cb) {
                    cb(m)
                })
            }

            // Reset callbacks (so we don't call them again)
            callbacks[m.name] = []
        }
    }

    // Public
    window.loadModule = loadModule
    window.module = module
}());
