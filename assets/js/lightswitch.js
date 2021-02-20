const switchPalette = (light) => {
  if (light) {
    document.body.setAttribute("type", "bright")
  } else {
    document.body.setAttribute("type", "dark")
  }
}

let light = localStorage.getItem("light");

if (light == null)
  light = "true";

light = (light == "true")

switchPalette(light)

window.addEventListener("load", () => {
  let lightswitch = document.getElementById("lightswitch");
  lightswitch.style.visibility = "visible"

  switchPalette(light)

  lightswitch.addEventListener("click", () => {
    light = !light
    switchPalette(light)
    localStorage.setItem("light", light)
  })
})
