const switchPalette = (light) => {
  if (light) {
    document.body.setAttribute("type", "bright")
  } else {
    document.body.setAttribute("type", "dark")
  }
}

let light = Boolean(localStorage.getItem("light") ?? "true");

switchPalette(light)

window.addEventListener("load", () => {
  const lightswitch = document.getElementById("lightswitch");
  lightswitch.style.visibility = "visible"
  lightswitch.innerText = `Switch to ${!light ? "🌞" : "🌙"}`;

  switchPalette(light)

  lightswitch.addEventListener("click", () => {
    light = !light
    lightswitch.innerText = `Switch to ${!light ? "🌞" : "🌙"}`;
    switchPalette(light)
    localStorage.setItem("light", light)
  })
})
