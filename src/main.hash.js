import { setPathName, router } from "./main.js";

setPathName(location.hash, "hash");
document.addEventListener("DOMContentLoaded", () => {
  router();
});

window.addEventListener("hashchange", () => {
  setPathName(location.hash, "hash");
  router();
  console.log("hashchange");
});
