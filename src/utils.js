import { redirect } from "react-router-dom";
export async function requireAuth() {
    console.log("Require auth called");
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        const response = redirect('/login?message=You must log in first');
        response.body = true;
        throw response;
    }
    return null;
}