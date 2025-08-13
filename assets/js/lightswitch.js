const sunSvg = `<svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3V0H9V3H7Z" fill="#FE0"/>
<path d="M9 13V16H7V13H9Z" fill="#FE0"/>
<path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#FE0"/>
<path d="M0 9H3V7H0V9Z" fill="#FE0"/>
<path d="M16 7H13V9H16V7Z" fill="#FE0"/>
<path d="M3.75735 5.17157L1.63603 3.05025L3.05025 1.63603L5.17157 3.75735L3.75735 5.17157Z" fill="#FE0"/>
<path d="M12.2426 10.8284L14.364 12.9497L12.9497 14.364L10.8284 12.2426L12.2426 10.8284Z" fill="#FE0"/>
<path d="M3.05025 14.364L5.17157 12.2426L3.75735 10.8284L1.63603 12.9498L3.05025 14.364Z" fill="#FE0"/>
<path d="M12.9497 1.63604L10.8284 3.75736L12.2426 5.17158L14.364 3.05026L12.9497 1.63604Z" fill="#FE0"/>
</svg>`

const moonSvg = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"/>
</svg>`


const switchPalette = (light) => {
  if (light) {
    document.documentElement.setAttribute("data-colorscheme", "bright");
  } else {
    document.documentElement.setAttribute("data-colorscheme", "dark");
  }
};

let light = localStorage.getItem("light");
if (light === undefined) {
  // If true, then the user prefers dark color schemes and this is their first visit / localStorage was cleared
  light = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  localStorage.setItem(light);
}

switchPalette(light);

window.addEventListener("load", () => {
  const lightswitch = document.getElementById("lightswitch");
  if (!lightswitch) {
    console.warn("Lightswitch element not found.");
    return;
  }

  lightswitch.style.visibility = "visible";
  lightswitch.innerHTML = !light ? sunSvg : moonSvg;

  switchPalette(light);

  lightswitch.addEventListener("click", () => {
    lightswitch.innerHTML = light ? sunSvg : moonSvg;
    light = !light;
    switchPalette(light);
    localStorage.setItem("light", light);
  });
});
