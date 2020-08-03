

if(!("convert" in Array.prototype)) {
    Object.defineProperty(Array.prototype, "convert",  {
        value: new Proxy(Array.prototype.map,  {
            apply: function ($target, $this, $args) {
                const html = $target.apply($this, $args).join("")
                return Object.create(null, {
                    toDOM: {
                        value: (target) => {
                            target.innerHTML = html
                        }
                    }
                })
                }   
            })
        })
    }

if(!("listenFor" in EventTarget.prototype)) {
    Object.defineProperty(EventTarget.prototype, "listenFor", {
        value: new Proxy(EventTarget.prototype.addEventListener, {
            apply: function (_target, _this, _args) {
                return_target.apply(_this,_args)
            }
        })
    })
}