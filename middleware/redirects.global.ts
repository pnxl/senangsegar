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

  if (to.path === "/menu") {
    if (useCookie("language").value === "en") {
      useCookie("language").value = "en";
      return navigateTo("/en/menu");
    } else {
      useCookie("language").value = "id";
      return navigateTo("/id/menu");
    }
  }

  if (to.path === "/id/survey/products-interest") {
    return navigateTo("/id/survey/products-interest/smoothies");
  }

  if (to.path === "/en/survey/products-interest") {
    return navigateTo("/en/survey/products-interest/smoothies");
  }
});
