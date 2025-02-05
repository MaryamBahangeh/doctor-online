"use client";

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { DoctorReviewModel } from "@/models/doctor-review";
import { doctorReviews } from "@/assests/doctor-reviews";
import { REVIEWS_SORT_OPTIONS } from "@/options/reviews-sort-options";
import { SelectOptionType } from "@/types/select-option-type";

type ContextType = {
  getDoctorReviews: (
    doctorId: string,
    searchText: string,
  ) => DoctorReviewModel[];
  sortBy: SelectOptionType;
  setSortBy: Dispatch<SetStateAction<SelectOptionType>>;
};

export const ReviewContext = createContext<ContextType>({
  getDoctorReviews: () => [],
  sortBy: REVIEWS_SORT_OPTIONS[0],
  setSortBy: () => {},
});

function ReviewProvider({ children }: PropsWithChildren) {
  const [sortBy, setSortBy] = useState<SelectOptionType>(
    REVIEWS_SORT_OPTIONS[0],
  );

  const getDoctorReviews = useCallback(
    (doctorId: string, searchText: string): DoctorReviewModel[] => {
      let filteredReviews = doctorReviews.filter(
        (review) => review.doctorId === doctorId,
      );

      if (searchText !== "")
        filteredReviews = filteredReviews.filter((review) =>
          review.text.toLowerCase().includes(searchText.toLowerCase()),
        );

      if (sortBy.value === "0") {
        return filteredReviews.sort((a, b) => b.rate - a.rate);
      }

      if (sortBy.value === "1") {
        return filteredReviews.sort((a, b) =>
          b.datetime.localeCompare(a.datetime),
        );
      }

      return filteredReviews;
    },
    [sortBy],
  );

  return (
    <ReviewContext.Provider value={{ getDoctorReviews, sortBy, setSortBy }}>
      {children}
    </ReviewContext.Provider>
  );
}

export default ReviewProvider;
