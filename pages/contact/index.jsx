import Link from "next/link";
import React from "react";
import Form from "../../components/form/Form";
import MainLayout from "../../components/layouts/MainLayout";

const ContactPage = () => {
  return (
    <MainLayout>
      <Form />
      {/* <p className={"title"}>ContactPage</p>
      <div className={"grid"}>
        <Link href="/"> Licenciada en derecho</Link>
      </div> */}
    </MainLayout>
  );
};

export default ContactPage;
