let sheet = document.createElement("link")
sheet.setAttribute("rel", "stylesheet");
document.head.appendChild(sheet);

const switchPalette = (sheet, light) => {
  if (light) {
    sheet.setAttribute("href", "/css/light_style.css")
  } else {
    sheet.setAttribute("href", "/css/dark_style.css")
  }
}

let light = localStorage.getItem("light");

if (light == null)
  light = "true";

light = (light == "true")

switchPalette(sheet, light)

window.addEventListener("load", () => {
  let lightswitch = document.getElementById("lightswitch");
  lightswitch.style.visibility = "visible"

  switchPalette(sheet, light)

  lightswitch.addEventListener("click", () => {
    light = !light
    switchPalette(sheet, light)
    localStorage.setItem("light", light)
  })
})

