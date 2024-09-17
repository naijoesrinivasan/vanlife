import { redirect } from "react-router-dom";
export async function requireAuth(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        return redirect(`/login?message=You must login first&redirectTo=${pathname}`);
    }
    return null;
}