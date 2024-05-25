import { routes } from "./helpers/routes";

export function navigateTo(path) {
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}

async function checkAuth(path, params) {
    const token = localStorage.getItem("token");

    if (token) {
        if (path === "/login") {
            navigateTo("/profile");
            return;
        }

        const privateRoute = routes.private.find((r) => r.path === path);
        if (privateRoute) {
            privateRoute.component(params);
            return;
        } else {
            navigateTo("/home");
        }
    } else {
        navigateTo("/login");
    }
}

export async function Router() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    if (path === "/login") {
        const token = localStorage.getItem("token");

        if (token) {
            navigateTo("/profile");
            return;
        }
    }

    const publicRoute = routes.public.find((r) => r.path === path);
    const privateRoute = routes.private.find((r) => r.path === path);

    if (publicRoute) {
        publicRoute.component(params);
    } else if (privateRoute) {
        checkAuth(path, params);
    } else {
        console.warn("Ruta no encontrada:", path);
        navigateTo("/home");
    }
}

window.onpopstate = Router;
