"use client";

import React, { useContext } from "react";

import { DoctorsContext } from "@/app/search/providers/DoctorsProvider";

function Stats() {
  const { sortedDoctors } = useContext(DoctorsContext);

  return <div>Search Result: {sortedDoctors.length.toLocaleString()}</div>;
}

export default Stats;
