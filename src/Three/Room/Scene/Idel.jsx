"use client";
import React, { useRef } from "react";
import { Room } from "../index";

function Idel() {
  const roomRef = useRef();
  return <Room ref={roomRef} />;
}

export default Idel;
