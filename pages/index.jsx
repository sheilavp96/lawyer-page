import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import perfil from "../assets/mia.png";
import { useStyles } from "./styles";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function HomePage() {
  const classes = useStyles();

  return (
    <MainLayout>
      <div className={classes.containerHome}>
        <div className={classes.perfilImg}>
          <Image src={perfil} className={classes.image} />
        </div>

        <div className={classes.text}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className={classes.title}
          >
            Marcela Irene Pérez Mendez
          </Typography>
          <Typography> Licenciada en derecho penal</Typography>
        </div>
      </div>
    </MainLayout>
  );
}
