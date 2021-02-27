import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent } = useGlobalContext();
  return (
    <h3 style={{ textAlign: "center", margin: "2rem 0" }}>{modalContent}</h3>
  );
};

export default Modal;
