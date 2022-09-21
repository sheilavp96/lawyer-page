import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./activelink.module.css";

const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a className={asPath === href ? styles.href : styles.text}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
