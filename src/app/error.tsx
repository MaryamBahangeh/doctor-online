"use client";

import Image from "next/image";

import errorImage from "@/assests/illustrations/error.svg";
import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: Props) {
  return (
    <div className={styles.error}>
      <div className={styles.writing}>
        <h1>An unexpected error happened!</h1>
        <h3>Please contact the client service.</h3>
      </div>

      <div className={styles.action}>
        <button onClick={reset}>Retry</button>
      </div>

      <div className={styles.visual}>
        <Image src={errorImage} alt="" />
      </div>

      <div className={styles.trace}>
        <details>
          <summary>Error log</summary>
          <pre>{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}

export default Error;
