import React from "react";

import { DoctorReviewModel } from "@/models/doctor-review";
import StarBold from "@/icons/StarBold";

import styles from "./Review.module.css";

type Props = {
  review: DoctorReviewModel;
};
function Review({ review }: Props) {
  return (
    <div className={styles.review}>
      <div className={styles["user-info"]}>
        <div className={styles.image}>{review.userName[0].toUpperCase()}</div>

        <div className={styles["primary-info"]}>
          <div className={styles.name}>{review.userName}</div>
          <div className={styles.date}>{review.datetime}</div>
        </div>

        <div className={styles.rate}>
          <StarBold /> {review.rate}
        </div>
      </div>

      <div className={styles["review-text"]}>{review.text}</div>
    </div>
  );
}

export default Review;
