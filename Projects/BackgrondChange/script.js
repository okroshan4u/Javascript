let interchage;
    const randomColor = function () {
        const colorstr = "0123456789abcdef"
        let result = "#"
        for (let i = 0; i < 6; i++) {
            result += colorstr[Math.round(Math.random() * colorstr.length)]
        }
        return result;
    }

    const startColorChange = function () {
        function changeBgColor() {
            document.body.style.background = `linear-gradient(to left top,${randomColor()},${randomColor()},${randomColor()})`;
        }
        if (!interchage) {
            interchage = setInterval(changeBgColor, 1000);
        }
    }
    const stopColorChange = function () {
        clearInterval(interchage);
        interchage = null;
    }


    document.querySelector("#start").addEventListener("click", () => {
        startColorChange()
    })

    document.querySelector("#stop").addEventListener("click", () => {
        stopColorChange()
    })

