import React from 'react'
import { Form, useLoaderData, redirect, useActionData, useNavigation } from 'react-router-dom'
import { loginUser } from '../api';

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const message = searchParams.get("message");
  return message;
}

export async function action({ request })  {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || '/host';
  console.log("In action: Redirect: ", pathname)

  try {
      const data = await loginUser({ email, password });
      console.log("Inside login try: ", data);
      localStorage.setItem("loggedIn", true);
      return redirect(pathname);
  } catch(err) {
      console.log("Received an error")
      console.log("Inside login error: ", err)
      return err
  }
 
}

export default function Login() {
  const error = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  const styles = {
    color: "red",
    fontFamily: "Poppins",
    fontSize: "0.9em",
    textAlign: "center"
  };

  return (
    <main className='form-section'>
      <h2>Sign in to your account</h2>
      <Form method="POST" replace className='login-form'>
        <input 
          type="email" 
          name="email"
          id="email"
          placeholder='Email'
        />
        <input 
          type="password" 
          name="password"
          id="password"
          placeholder='Password'
        />
        { message && <span style={styles}>{message}</span> }
        {error && <span style={styles}>{error.message}</span>}
        <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging In" : "Log In"}</button>
      </Form>
    </main>
  )
}
