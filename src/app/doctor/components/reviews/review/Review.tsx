import styles from "./Review.module.css";
import React from "react";
import Image from "next/image";
import { DoctorReviewModel } from "@/models/doctor-review";
import StarBold from "@/icons/StarBold";

type Props = {
  review: DoctorReviewModel;
};
function Review({ review }: Props) {
  return (
    <div className={styles.review}>
      <div className={styles["user-info"]}>
        <Image
          className={styles.image}
          src={review.image}
          alt="user image"
          width="70"
          height="70"
        ></Image>

        <div className={styles["primary-info"]}>
          <div>{review.userName}</div>
          <div>{review.datetime}</div>
        </div>

        <div className={styles.rate}>
          <StarBold color={"gold"} /> {review.rate}
        </div>
      </div>

      <div className={styles["review-text"]}>{review.text}</div>
    </div>
  );
}

export default Review;
