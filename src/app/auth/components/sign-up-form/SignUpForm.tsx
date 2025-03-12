"use client";

import { FormEvent, ReactElement, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import signUpImage from "@/assests/images/sign-up.webp";

import Button, { Variant, Color } from "@/components/button/Button";
import CardComponent from "@/components/card/Card";
import NormalInput from "@/components/normal-input/NormalInput";
import PasswordInput from "@/components/password-input/PasswordInput";

import MingcuteIncognitoModeLine from "@/icons/MingcuteIncognitoModeLine";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";
import MingcuteMailLine from "@/icons/MingcuteMailLine";

import { SignUpDto } from "@/dto/auth.dto";

import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "@/app/auth/styles/AuthForm.module.css";

export default function SignUpForm(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDto = {
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "registration succeed.",
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
            <h1>Sign Up</h1>
            <form ref={formRef} onSubmit={formSubmitHandler}>
              <NormalInput
                label="name"
                type="text"
                name="name"
                prefixIcon={<MingcuteIncognitoModeLine />}
              />
              <NormalInput
                label="user name"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <NormalInput
                label="email"
                type="email"
                name="email"
                prefixIcon={<MingcuteMailLine />}
              />
              <PasswordInput
                label="password"
                name="password"
                autoComplete="new-password"
              />
              <Button variant={Variant.SOLID} color={Color.PRIMARY}>
                Sign up
              </Button>
            </form>
            <div className={styles["change-form"]}>
              You have already signed in?
              {` `}
              <Link href="/auth/sign-in">Sign in</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signUpImage} alt="" />
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
