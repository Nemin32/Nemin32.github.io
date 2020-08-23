window.addEventListener("load", () => {
    let tick = false;

    window.addEventListener("scroll", () => {
        let scrolly = window.scrollY;

        if (!tick) {
            requestAnimationFrame(() => {
                const percent = Math.round(scrolly / (document.body.scrollHeight - window.innerHeight) * 100)

                document.documentElement.style.setProperty("--progress", percent + "%");
                tick = false;
            })
            tick = true;
        }
    })
})
