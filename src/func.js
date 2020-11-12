export function f(offset) {
    let utc = new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" )


    let now = new Date(utc)

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const s = new Date(utc).toLocaleTimeString()

    const diff = Math.round((now - today) / 1000)

    const count = {
        sec: (diff / 60) % 1,
        min: (diff / 3600) % 1,
        hrs: (diff / 43200) % 1
    }
    function setTime(val, styleObject) {
        styleObject = {
            transform: `rotateZ(${Math.round(val) + 'deg'})`
        }
        return styleObject

    }
    return {
        clock: {
            sec: setTime(360 * count.sec, {}),
            min: setTime(360 * count.min, {}),
            hrs: setTime(360 * count.hrs, {})
        },
        time: s
    }
}