import Link from "next/link";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <p className={"title"}>AboutPage</p>

      <div className={"grid"}>
        <Link href="/"> Licenciada en derecho</Link>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
