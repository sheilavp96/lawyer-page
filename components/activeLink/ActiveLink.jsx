import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStyles } from "./styles";

const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();
  const classes = useStyles();

  return (
    <Link href={href}>
      <a className={asPath === href ? classes.href : classes.text}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
