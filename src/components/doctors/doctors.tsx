"use client";
import React, { useContext } from "react";
import styles from "./doctors.module.css";

import DoctorCard from "@/components/doctors/components/doctor-card/DoctorCard";
import { DoctorsContext } from "@/app/search/providers/DoctorsProvider";

function Doctors() {
  const { filteredDoctors } = useContext(DoctorsContext);
  return (
    <div className={styles.doctors}>
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export default Doctors;
