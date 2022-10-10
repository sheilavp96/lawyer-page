import { Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Image from "next/image";
import services from "../../assets/img2.jpg";
import { useStyles } from "../../components/styles/styles";

const ContactPage = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <div className={classes.servicesImgDiv}>
        <Image src={services} className={classes.serviceImg} />
        <div className={classes.servicesTitle}>
          <Typography>Nuestra experencia a tu sevicio</Typography>
          <Typography>Servicios</Typography>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
