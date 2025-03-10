"use client";

import React from "react";
import { fetchWithToast } from "@/utils/fetch-utils";
import styles from "./page.module.css";
import Button, { Color, Variant } from "@/components/button/Button";

import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const signOutButtonClickHandler = async () => {
    const result = await fetchWithToast<null>("/api/auth/sign-out", {
      method: "POST",
    });

    if (result.error) {
      return;
    }
    router.push("/");
  };

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
