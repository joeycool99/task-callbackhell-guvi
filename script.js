var h1 = document.getElementById("timer")

const delayedChange = (time, delay, doNext) => {
    setTimeout(() => {
        console.log(typeof (time))

        h1.innerHTML = time;
        doNext && doNext();
    }, delay)
}


delayedChange('10', 1000, () => {
    delayedChange('9', 1000, () => {
        delayedChange('8', 1000, () => {
            delayedChange('7', 1000, () => {
                delayedChange('6', 1000, () => {
                    delayedChange('5', 1000, () => {
                        delayedChange('4', 1000, () => {
                            delayedChange('3', 1000, () => {
                                delayedChange('2', 1000, () => {
                                    delayedChange('1', 1000, () => {
                                        delayedChange(' Happy Independence Day ', 1000, () => {
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



