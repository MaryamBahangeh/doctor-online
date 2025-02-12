import React, { ReactElement } from "react";
import { doctors } from "@/assests/doctors";
import { notFound } from "next/navigation";

import DoctorInfo from "@/app/doctor/components/doctor-info/DoctorInfo";
import MoreInfo from "@/app/doctor/components/more-info/MoreInfo";
import Activities from "@/app/doctor/components/activities/Activities";
import About from "@/app/doctor/components/about/About";
import Reviews from "@/app/doctor/components/reviews/Reviews";
import ReviewProvider from "@/app/doctor/components/reviews/providers/ReviewProvider";

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
        <DoctorInfo doctor={doctor} />
        <MoreInfo doctor={doctor} />

        <About doctor={doctor} />

        <Activities doctor={doctor} />

        <Reviews doctor={doctor}></Reviews>
      </ReviewProvider>
    </div>
  );
}

export default Page;
