import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent } = useGlobalContext();
  return <h3>{modalContent}</h3>;
};

export default Modal;
