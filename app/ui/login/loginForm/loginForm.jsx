"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />

      <button>Login</button>
      <p>Don't have an account? <Link href={"/register"}>SignUp</Link></p>
      {state && state}
    </form>
  );
};

export default LoginForm;
