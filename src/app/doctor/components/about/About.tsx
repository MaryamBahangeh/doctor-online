import React from "react";
import { DoctorModel } from "@/models/doctor";

import Card from "@/components/card/Card";
import styles from "./About.module.css";

type Props = {
  doctor: DoctorModel;
};

function About({ doctor }: Props) {
  return (
    <Card className={styles.about} title="About me">
      {doctor.aboutMe}
    </Card>
  );
}

export default About;
