import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./form.module.css";
import lady from "../../assets/lady1.jpg";
import Image from "next/image";
const Form = () => {
  const [open, setOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    issue: "",
    message: "",
  });
  const { name, lastName, email, issue, message } = contactInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSendMessage = () => {
    setOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 6000);
  }, [open]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde a, neque quidem
            itaque quisquam laudantium laboriosam maiores debitis tempora.
          </Typography>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Apellido"
            variant="outlined"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Asunto"
            variant="outlined"
            name="issue"
            value={issue}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Mensaje"
            variant="outlined"
            multiline
            maxRows={8}
            name="message"
            value={message}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            style={{ width: 200, margin: "auto" }}
            onClick={handleSendMessage}
          >
            Enviar
          </Button>
          {open && (
            <Alert severity="success" style={{ zIndex: 1 }}>
              Su mensaje ha sido enviado con éxito
            </Alert>
          )}
        </div>
        <div className={styles.imgContainer}>
          <Image src={lady} className={styles.img} />
        </div>
      </div>
    </>
  );
};

export default Form;
