import { ReactElement } from "react";

import SignUpFormComponent from "@/app/auth/components/sign-up-form/SignUpForm";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <SignUpFormComponent />
    </div>
  );
}