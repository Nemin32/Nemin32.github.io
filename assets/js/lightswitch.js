window.addEventListener("load", () => {
  let lightswitch = document.getElementById("lightswitch");
  let sheet = document.createElement("link")
  sheet.setAttribute("rel", "stylesheet");
  document.head.appendChild(sheet);

  lightswitch.style.visibility = "visible"

  const switchPalette = (light) => {
    if (light) {
      document.body.style.backgroundColor = "#e0e0c0";
      document.querySelector("header").style.backgroundColor = "#3f663b";
      sheet.setAttribute("href", "/css/light_style.css")
    } else {
      document.body.style.backgroundColor = "#2e2e2e";
      document.querySelector("header").style.backgroundColor = "#343";
      sheet.setAttribute("href", "/css/dark_style.css")
    }
  }

  let light = localStorage.getItem("light");

  if (light == null)
    light = "true";

  light = (light == "true")

  switchPalette(light)

  lightswitch.addEventListener("click", () => {
    console.log(light)

    light = !light
    switchPalette(light)

    localStorage.setItem("light", light)
  })
})

