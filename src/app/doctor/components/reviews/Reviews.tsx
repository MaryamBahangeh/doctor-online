"use client";

import React, { FormEvent, useContext, useState } from "react";

import { DoctorModel } from "@/models/doctor";

import Card from "@/components/card/Card";
import SelectComponent from "@/components/select/SelectComponent";

import { ReviewContext } from "@/app/doctor/components/reviews/providers/ReviewProvider";
import Review from "@/app/doctor/components/reviews/review/Review";

import { REVIEWS_SORT_OPTIONS } from "@/options/reviews-sort-options";
import { SelectOptionType } from "@/types/select-option-type";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";

import styles from "./Reviews.module.css";

type Props = {
  doctor: DoctorModel;
};

function Reviews({ doctor }: Props) {
  const { getDoctorReviews, sortBy, setSortBy } = useContext(ReviewContext);

  const changeHandler = (option: SelectOptionType): void => {
    setSortBy(option);
  };
  const [searchText, setSearchText] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.reviews} title={"Reviews on " + doctor.name}>
      <form className={styles.filter} onSubmit={submitHandler}>
        <SelectComponent
          options={REVIEWS_SORT_OPTIONS}
          title="Sort by"
          floating={false}
          selectedOption={sortBy}
          onSelectedOptionChange={changeHandler}
        />

        <div className={styles["input-container"]}>
          <input
            placeholder="Search in the reviews"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />{" "}
          <MingcuteSearchLine className={styles.prefix}></MingcuteSearchLine>
        </div>
      </form>

      <div className={styles["reviews-container"]}>
        {getDoctorReviews(doctor.id, searchText).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </Card>
  );
}

export default Reviews;
