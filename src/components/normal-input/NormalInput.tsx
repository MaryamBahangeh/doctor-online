import { ComponentProps, ForwardedRef, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import Button, { Color, Variant } from "@/components/button/Button";

import styles from "./NormalInput.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onSuffixClick?: ComponentProps<typeof Button>["onClick"];
};

function NormalInput(
  {
    label,
    prefixIcon,
    suffixIcon,
    onSuffixClick,
    className,
    ...otherProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <label className={clsx(styles["normal-input"], className)}>
      <div className={styles["label-text"]}>{label}</div>
      <div className={styles.box}>
        {prefixIcon && (
          <div className={styles["prefix-icon"]}>{prefixIcon}</div>
        )}
        <input ref={ref} placeholder="" {...otherProps} />
        {suffixIcon && (
          <Button
            variant={Variant.TEXT}
            color={Color.IDLE}
            onClick={onSuffixClick}
            type="button"
          >
            <div className={styles["suffix-icon"]}>{suffixIcon}</div>
          </Button>
        )}
      </div>
    </label>
  );
}

export default forwardRef(NormalInput);
