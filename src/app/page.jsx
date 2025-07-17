"use client";
import CanvesWrapper from "@/Components/Common/CanvesWrapper";
import Wall from "@/Three/Room/Wall";
import { RoboRoom  } from "@/Three/Robo/RoboRoom";
import { Robo } from "@/Three/Robo";
import Idel from "@/Three/RoomWithRobo/Scene/Idel";
// import { Scientists } from "@/Three/Scientist/Scientist";
import { LaptopModel } from "@/Three/laptop";
import { ScifiBoxModel } from "@/Three/showcaseroom/scifibox";
import { MagnifierModel } from "@/Three/showcaseroom/magnifier";
import { MobileControllerModel } from "@/Three/showcaseroom/mobilecontroller";
import { FloatingObjectModel } from "@/Three/showcaseroom/floatingobject";
import { FaceScannerModel } from "@/Three/showcaseroom/facescanner";
import { HumanoidRobotModel } from "@/Three/showcaseroom/humanoidrobot";
import { ControlCenterModel } from "@/Three/showcaseroom/controlcenterr";
// import { Building1Model1 } from "@/Three/showcaseroom/building1";
import { RestaurantModel } from "@/Three/showcaseroom/restaurant";
import { BulbModel } from "@/Three/showcaseroom/bulb";
import { SmallRoboModel } from "@/Three/showcaseroom/smallrobo";
import { CoffeeBoxModel } from "@/Three/showcaseroom/coffeebox";
import { VaultModel } from "@/Three/showcaseroom/vault";
import { BitcoinModel } from "@/Three/showcaseroom/bitcoin";
import { MoneyModel } from "@/Three/showcaseroom/bitcoin/money";
import { CenterElementModel } from "@/Three/showcaseroom/center-element";
import TextOne from "@/Three/floatingtext/text1";
import TextTwo from "@/Three/floatingtext/text2";
import TextThree from "@/Three/floatingtext/text3";
import TextFour from "@/Three/floatingtext/text4";
import TextFive from "@/Three/floatingtext/text5";
import TitleText from "@/Three/floatingtext/TitleText";
import RobotLeftText from "@/Three/floatingtext/RobotLeftText";
import RobotTopText from "@/Three/floatingtext/RobotTopText";
import AboutNav from "@/Three/wallnavs/AboutNav";
import LaserLogo from "@/Three/floatingtext/LaserLogo";
import { Scanner } from "@/Three/showcaseroom/center-element/scanner";
import { ScannerTop } from "@/Three/showcaseroom/center-element/scannertop";
import ContactUsNav from "@/Three/wallnavs/ContactUs";
import ServiceNav from "@/Three/wallnavs/ServiceNav";
import ResourceNav from "@/Three/wallnavs/ResourceNav";
import StartUpNav from "@/Three/wallnavs/StartUpNav";
import DoorOneText from "@/Three/floatingtext/DoorOneText";
import DoorTwoText from "@/Three/floatingtext/DoorTwoText";
import DoorThreeText from "@/Three/floatingtext/DoorThreeText";
import DoorFourText from "@/Three/floatingtext/DoorFourText";
import { Suspense } from "react";
import { CustomLoader } from "@/Components/Common/CustomerLoader";
// import { Building3Model } from "@/Three/showcaseroom/building1/building3";
// import { FactoryModel } from "@/Three/showcaseroom/factory";
// import { CloudEffect } from "@/Three/Room/Scene/CloudEffect";
// import { Model } from "@/Three/model";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <CanvesWrapper>
      <Suspense fallback={<CustomLoader />}>
        <Idel />
        <Wall />
        <LaptopModel />
        <ScifiBoxModel />
        <MagnifierModel />
        <MobileControllerModel />
        <FloatingObjectModel />/
        <FaceScannerModel />
        <HumanoidRobotModel />
        <ControlCenterModel />
        {/* <Building1Model1 /> */}
        <RestaurantModel />
        {/* <Building3Model /> */}
        {/* <FactoryModel /> */}
        {/* <Model/> */}
        {/* <Scientists /> */}
        {/* <CloudEffect />
         <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} /> */}
        {/* <spotLight position={[-20, 0, 10]} color="white" angle={0.15} decay={0} penumbra={-1} intensity={30} /> 
        <spotLight position={[20, -10, 10]} color="white" angle={0.2} decay={0} penumbra={-1} intensity={20} /> */}

        <SmallRoboModel />
        <CoffeeBoxModel />
        <BulbModel />
        <VaultModel />
        <BitcoinModel />
        {/* <MoneyModel /> */}
        <CenterElementModel />



        {/* Navs */}
        <AboutNav />
        <ContactUsNav />
        <ServiceNav />
        <ResourceNav />
        <StartUpNav />



        {/* Floating Text */}
        <Scanner />
        <ScannerTop />
        <LaserLogo />
        <TitleText />
        <RobotLeftText />
        <RobotTopText />
        <TextOne />
        <TextTwo />
        <TextThree />
        <TextFour />
        <TextFive />


        <DoorOneText />
        <DoorTwoText />
        <DoorThreeText />
        <DoorFourText />

        {/* Floating Text */}

     
      </Suspense>
      </CanvesWrapper>
    </div>
  );
}
