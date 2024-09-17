import React, { useState } from 'react'
import { Form, useLoaderData, useNavigate, redirect } from 'react-router-dom'
import { loginUser } from '../api';

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const message = searchParams.get("message");
  return message;
}

export async function action({ request, params })  {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const data = await loginUser({ email, password });
  console.log(data);
  localStorage.setItem("loggedIn", true);

  const response = redirect('/host');
  response.body = true;
  throw response;
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const message = useLoaderData();
  const messageStyle = {
    color: "red",
    fontFamily: "Poppins",
    fontSize: "0.9em",
    textAlign: "center"
  };

  return (
    <main className='login-form'>
      <h2>Sign in to your account</h2>
      <Form method="POST" replace>
        <input 
          type="email" 
          name='email'
          placeholder='Email'
        />
        <input 
          type="password" 
          name='password'
          placeholder='Password'
        />
        { message && <span style={messageStyle}>{message}</span> }
        {error && <span style={messageStyle}>{error.message}</span>}
        <button>{status === "submitting" ? "Logging In" : "Log In"}</button>
      </Form>
    </main>
  )
}
