"use client";

import React, { useContext } from "react";
import styles from "./Stats.module.css";
import { DoctorsContext } from "@/app/search/providers/DoctorsProvider";
function Stats() {
  const { sortedDoctors } = useContext(DoctorsContext);
  const result = sortedDoctors.length.toLocaleString();

  return <div className={styles.stats}>Result: {result}</div>;
}

export default Stats;
