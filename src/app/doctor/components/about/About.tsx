import React from "react";
import { DoctorModel } from "@/models/doctor";

import Card from "@/components/card/Card";
import styles from "./About.module.css";

type Props = {
  doctor: DoctorModel;
};

function About({ doctor }: Props) {
  return (
    <Card title="About me">
      <div className={styles.about}>{doctor.aboutMe}</div>
    </Card>
  );
}

export default About;
