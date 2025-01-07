import React from "react";
import { DoctorModel } from "@/models/doctor";
import Card from "@/components/card/Card";
import Image from "next/image";
import styles from "./DoctorCard.module.css";

type Props = {
  doctor: DoctorModel;
};

function DoctorCard({ doctor }: Props) {
  return (
    <Card>
      <div className={styles["doctor-card"]}>
        <div>{doctor.name}</div>
        <div>{doctor.specialityName}</div>
        <div>{doctor.address}</div>
        <div>{doctor.rate}</div>
        <div>{doctor.totalVotes}</div>
        <div>{doctor.serviceType}</div>
        <div>{doctor.firstAvailableAppointment}</div>
      </div>
    </Card>
  );
}

export default DoctorCard;
