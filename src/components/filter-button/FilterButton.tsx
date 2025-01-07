import React, { ComponentProps } from "react";
import clsx from "clsx";
import styles from "./FilterButton.module.css";

type Props = ComponentProps<"button"> & {
  isActive: boolean;
};
function FilterButton({
  className,
  children,
  isActive = false,
  ...otherProps
}: Props) {
  return (
    <button
      className={clsx(
        styles["filter-button"],
        className,
        isActive && styles.active,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default FilterButton;
