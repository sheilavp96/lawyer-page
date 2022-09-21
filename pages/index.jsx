import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import perfil from "../assets/perfil.jpg";
import { useStyles } from "../components/styles/styles";
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

        <div className={classes.textContainer}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className={classes.title}
          >
            Marcela Irene Pérez Mendez
          </Typography>
          <Typography variant="h6"> Licenciada en derecho penal</Typography>
          <Typography variant="h8">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum magnam
            odio debitis aperiam perspiciatis error porro consequuntur.
          </Typography>
        </div>
      </div>
    </MainLayout>
  );
}
