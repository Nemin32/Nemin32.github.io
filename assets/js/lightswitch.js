window.addEventListener("load", () => {
  let lightswitch = document.getElementById("lightswitch");
  let sheet = document.getElementById("style");

  let light = true;
  lightswitch.addEventListener("click", () => {
    if (light)
      sheet.setAttribute("href", "/css/dark_style.css")
    else
      sheet.setAttribute("href", "/css/light_style.css")

    light = !light
  })
})
