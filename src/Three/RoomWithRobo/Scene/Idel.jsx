// "use client";
// import React, { useRef } from "react";
// import { RoomWithRobo } from "../index";

// function Idel() {
//   const roomRef = useRef();
//   return <RoomWithRobo ref={roomRef} />;
// }

// export default Idel;


"use client";
import React, { useRef } from "react";
// import { CompressedRoomWithRobo } from "../temp_file_new";
import { FinalModel } from "../FinalModel";

function Idel() {
  const roomRef = useRef();
  return <FinalModel ref={roomRef} />
}

export default Idel;
