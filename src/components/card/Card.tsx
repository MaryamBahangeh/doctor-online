import { PropsWithChildren } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

type Props = PropsWithChildren & {
  title?: string;
  className?: string;
};

function Card({ title, children, className }: Props) {
  return (
    <div className={clsx(styles.card, className)}>
      {title && <div className={styles.title}>{title}:</div>}
      {children}
    </div>
  );
}

export default Card;
