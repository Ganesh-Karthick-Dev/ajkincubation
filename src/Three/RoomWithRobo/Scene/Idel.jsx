"use client";
import React, { useRef } from "react";
import { RoomWithRobo } from "../index";

function Idel() {
  const roomRef = useRef();
  return <RoomWithRobo ref={roomRef} />;
}

export default Idel;
