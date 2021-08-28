var h1 = document.getElementById("timer")

const delayedColorChange = (time, delay, doNext) => {
    setTimeout(() => {
        console.log(typeof (time))

        h1.innerHTML = time;
        doNext && doNext();
    }, delay)
}


delayedColorChange('10', 1000, () => {
    delayedColorChange('9', 1000, () => {
        delayedColorChange('8', 1000, () => {
            delayedColorChange('7', 1000, () => {
                delayedColorChange('6', 1000, () => {
                    delayedColorChange('5', 1000, () => {
                        delayedColorChange('4', 1000, () => {
                            delayedColorChange('3', 1000, () => {
                                delayedColorChange('2', 1000, () => {
                                    delayedColorChange('1', 1000, () => {
                                        delayedColorChange(' Happy Independence Day ', 1000, () => {
                                            h1.setAttribute("style", "padding-top:120px;text-align:center")
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});



