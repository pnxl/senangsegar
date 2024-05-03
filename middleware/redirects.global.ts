export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/") {
    if (useCookie("language").value === "en") {
      useCookie("language").value = "en";
      return navigateTo("/en/");
    } else {
      useCookie("language").value = "id";
      return navigateTo("/id/");
    }
  }

  if (to.path === "/id/survey/products-interest") {
    return navigateTo("/id/survey/products-interest/smoothies");
  }
});
