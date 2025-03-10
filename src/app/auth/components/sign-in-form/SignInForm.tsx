"use client";

import { FormEvent, ReactElement, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import signInImage from "@/assests/images/sign-in.webp";

import Button, { Variant, Color } from "@/components/button/Button";
import CardComponent from "@/components/card/Card";
import NormalInputComponent from "@/components/normal-input/NormalInput";
import PasswordInputComponent from "@/components/password-input/PasswordInput";

import MingcuteUser3Line from "@/icons/MingcuteUser3Line";

import styles from "@/app/auth/styles/AuthForm.module.css";
import { fetchWithToast } from "@/utils/fetch-utils";
import { SignInDto } from "@/dto/auth.dto";
import { useRouter } from "next/navigation";

export default function SignInForm(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignInDto = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-in",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "Welcome " + dto.username + "!",
    );

    if (result.error) {
      return;
    }

    formRef.current?.reset();
    router.push("/dashboard");
  };

  return (
    <div className={styles["auth-form"]}>
      <CardComponent>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <h1>Sign In</h1>
            <form ref={formRef} onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="Username"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <PasswordInputComponent
                label="Password"
                name="password"
                autoComplete="current-password"
              />
              <Button variant={Variant.SOLID} color={Color.PRIMARY}>
                Sign in
              </Button>
            </form>
            <div className={styles["change-form"]}>
              Haven&#39;t sign up yet?
              {` `}
              <Link href="/auth/sign-up">Sing up</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signInImage} alt="" />
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
