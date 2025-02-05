import React from "react";
import { DoctorModel } from "@/models/doctor";

import Card from "@/components/card/Card";
import styles from "./About.module.css";

type Props = {
  doctor: DoctorModel;
};

function About({ doctor }: Props) {
  return (
    <Card className={styles.about} title="About me:">
      <div className={styles.info}>{doctor.aboutMe}</div>
    </Card>
  );
}

export default About;
