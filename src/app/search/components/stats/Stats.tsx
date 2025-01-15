"use client";

import React, { useContext } from "react";

import { DoctorsContext } from "@/app/search/providers/DoctorsProvider";

import styles from "./Stats.module.css";

function Stats() {
  const { sortedDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.stats}>
      Result: {sortedDoctors.length.toLocaleString()}
    </div>
  );
}

export default Stats;
