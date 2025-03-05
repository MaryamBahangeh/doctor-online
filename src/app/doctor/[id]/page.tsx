import React, { ReactElement } from "react";

import ReviewProvider from "@/app/doctor/components/reviews/providers/ReviewProvider";

import { doctors } from "@/assests/doctors";
import { notFound } from "next/navigation";

import DoctorInfo from "@/app/doctor/components/doctor-info/DoctorInfo";
import AppointmentInfo from "@/app/doctor/components/appointment-info/AppointmentInfo";
import Activities from "@/app/doctor/components/activities/Activities";
import About from "@/app/doctor/components/about/About";
import Reviews from "@/app/doctor/components/reviews/Reviews";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

function Page({ params }: Props): ReactElement {
  const doctor = doctors.find((doctor) => doctor.id === params.id);

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles["doctor-detail"]}>
      <ReviewProvider>
        <div className={styles.Info}>
          <DoctorInfo doctor={doctor} /> <About doctor={doctor} />{" "}
          <Reviews doctor={doctor} />
        </div>
        <div className={styles.Info}>
          <AppointmentInfo doctor={doctor} />
          <Activities doctor={doctor} />
        </div>
      </ReviewProvider>
    </div>
  );
}

export default Page;
