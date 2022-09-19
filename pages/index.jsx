import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import { useStyles } from "./styles";

export default function HomePage() {
  const classes = useStyles();

  return (
    <MainLayout>
      <div className={classes["home-container"]}>
        <p className={classes.title}>Marcela Irene Pérez Mendez</p>

        <div className={"grid"}>
          <Link href="/about"> Licenciada en derecho</Link>
        </div>
      </div>
    </MainLayout>
  );
}
