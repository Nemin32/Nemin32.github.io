
window.addEventListener("load", () => {
	const headers = [...document.querySelectorAll("h1, h2, h3, h4")]
	const offsets = headers.map((h) => h.offsetTop)
	const sidebar = document.querySelector("#sidebar ul")

	sidebar.style.background = "#efefef"

	let elems = headers.map((h, idx) => {
		const elem = document.createElement("li")
		elem.innerText = h.innerText

		elem.addEventListener("click", () => {
			window.scrollTo({top: offsets[idx] - 60, behavior: 'smooth'})
		})

		sidebar.appendChild(elem)

		return elem
	})

	let ticking = false
	document.addEventListener("scroll", (ev) => {
		lastKnownScrollPosition = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				let min = 0
				let offset = Number.MAX_SAFE_INTEGER

				for (let i = 0; i < offsets.length; i++) {
					const diff = Math.abs(offsets[i] - window.scrollY)
					if (diff < offset) {
						offset = diff
						min = i
					}
				}

				elems.forEach(elem => elem.style.color = "black")

				elems[min].style.color = "green"
				ticking = false;
			});

			ticking = true;
		}

	})
})