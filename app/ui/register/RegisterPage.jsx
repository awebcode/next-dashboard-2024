"use client";

import { addUser, authenticate } from "@/app/lib/actions";
import styles from "../login/login.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Sign up</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Sign up</button>
      <p>
        Already have an account? <Link href={"/login"}>login</Link>
      </p>
      {state && state}
    </form>
  );
};

export default RegisterForm;
