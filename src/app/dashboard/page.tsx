"use client";

import React from "react";
import styles from "./page.module.css";
import Button, { Color, Variant } from "@/components/button/Button";

function Page() {
  const signOutButtonClickHandler = () => {};

  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <Button
        variant={Variant.SOLID}
        color={Color.DANGER}
        onClick={signOutButtonClickHandler}
      >
        Log out
      </Button>
    </div>
  );
}

export default Page;
