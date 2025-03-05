import { ReactElement } from "react";

import SignInForm from "@/app/auth/components/sign-in-form/SignInForm";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <SignInForm />
    </div>
  );
}
