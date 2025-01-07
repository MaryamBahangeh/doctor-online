import styles from "./Card.module.css";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title?: string;
};

function Card({ title, children }: Props) {
  return (
    <div className={styles.card}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  );
}

export default Card;
