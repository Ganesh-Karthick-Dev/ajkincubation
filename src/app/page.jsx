"use client";
import CanvesWrapper from "@/Components/Common/CanvesWrapper";
import Wall from "@/Three/Room/Wall";
import MobileWall from "@/Three/Room/Wall/MobileWall";
// import { RoboRoom  } from "@/Three/Robo/RoboRoom";
// import { Robo } from "@/Three/Robo";
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
// import { MoneyModel } from "@/Three/showcaseroom/bitcoin/money";
import { CenterElementModel } from "@/Three/showcaseroom/center-element";
import TextOne from "@/Three/floatingtext/text1";
import TextTwo from "@/Three/floatingtext/text2";
import TextThree from "@/Three/floatingtext/text3";
import TextFour from "@/Three/floatingtext/text4";
// import TextFive from "@/Three/floatingtext/text5";
import TitleText from "@/Three/floatingtext/TitleText";
import RobotLeftText from "@/Three/floatingtext/RobotLeftText";
import RobotTopText from "@/Three/floatingtext/RobotTopText";
// import AboutNav from "@/Three/wallnavs/AboutNav";
// import LaserLogo from "@/Three/floatingtext/LaserLogo";
import { Scanner } from "@/Three/showcaseroom/center-element/scanner";
import { ScannerTop } from "@/Three/showcaseroom/center-element/scannertop";
// import ContactUsNav from "@/Three/wallnavs/ContactUs";
// import ServiceNav from "@/Three/wallnavs/ServiceNav";
// import ResourceNav from "@/Three/wallnavs/ResourceNav";
// import StartUpNav from "@/Three/wallnavs/StartUpNav";
import DoorOneText from "@/Three/floatingtext/DoorOneText";
import DoorTwoText from "@/Three/floatingtext/DoorTwoText";
import DoorThreeText from "@/Three/floatingtext/DoorThreeText";
// import DoorFourText from "@/Three/floatingtext/DoorFourText";
import { Suspense, useMemo, useState, useEffect, useRef } from "react";
import { CustomLoader } from "@/Components/Common/CustomerLoader";
import { ModelPreloader } from "@/Components/Common/ModelPreloader";
import RoboName from "@/Three/floatingtext/RoboName";
import BannerOne from "@/Three/centerroom/BannerOne";
import { Books } from "@/Three/showcaseroom/newmodels/Books";
import { AnimatedBook } from "@/Three/showcaseroom/newmodels/AnimatedBook";
import { Pen } from "@/Three/showcaseroom/newmodels/Pen";
import { ContactPhone } from "@/Three/showcaseroom/newmodels/CotactPhone";
import { AboutCollage } from "@/Three/showcaseroom/newmodels/AboutCollage";
// import AjkCollageNameText from "@/Three/floatingtext/AjkCollageNameText";
import { GlobeSpin } from "@/Three/showcaseroom/newmodels/GlobeSpin";
import { ImageDisplayModel } from "@/Three/showcaseroom/imagedisplay";
import { TextRight } from "@/Three/showcaseroom/imagedisplay/textright";
import { StartupRocket } from "@/Three/showcaseroom/newmodels/StartupRocket";
import { Router } from "@/Three/showcaseroom/newmodels/Router";
import { WifiModel } from "@/Three/showcaseroom/newmodels/WifiModel";
import SixStepsOne from "@/Three/centerroom/SixSteps";
import SixStepAiif from "@/Three/centerroom/SixStepAiif";
// import WallTouchUp from "@/Three/touchups/WallTouchUp";
// import { Building3Model } from "@/Three/showcaseroom/building1/building3";
// import { FactoryModel } from "@/Three/showcaseroom/factory";
// import { CloudEffect } from "@/Three/Room/Scene/CloudEffect";
// import { Model } from "@/Three/model";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";
import ScrollIndicatorUI from "./ScrollIndicatorUI";
import { EntranceText } from "@/Three/text/EntranceText";
import { AjkLogo } from "@/Three/floatingtext/AjkLogo";
import { AlternateWall } from "@/Three/showcaseroom/newmodels/AlternateWall";
import { ContactModel } from "@/Three/showcaseroom/newmodels/ContactModel";
import { ProgramsService } from "@/Three/showcaseroom/newmodels/ProgramsService";
import { SecondPic } from "@/Three/showcaseroom/newmodels/SecondPic";
import { ThirdPic } from "@/Three/showcaseroom/newmodels/ThirdPic";
import { FourthPic } from "@/Three/showcaseroom/newmodels/FourthPic";
import { BlackObect } from "@/Three/showcaseroom/newmodels/BlackObect";
import PatchWall from "@/Three/Room/Wall/PatchWall";


export default function Home() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupRender, setPopupRender] = useState(false);
  const [activeController, setActiveController] = useState(null);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    description: "",
    actionText: "",
    onActionClick: null
  });
  
  const popupRef = useRef(null);
  const backdropRef = useRef(null);

  // Load Ethnocentric font
  useEffect(() => {
    const loadFont = async () => {
      try {
        const font = new FontFace('Ethnocentric', 'url(/fonts/Ethnocentric_Rg.otf)');
        await font.load();
        document.fonts.add(font);
      } catch (error) {
        console.log('Font loading failed:', error);
      }
    };
    loadFont();
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP Animation for popup
  useEffect(() => {
    if (popupVisible) {
      // First, add to DOM
      setPopupRender(true);
      
      // Then animate in on next frame
      requestAnimationFrame(() => {
        if (popupRef.current) {
          gsap.killTweensOf(popupRef.current);
          
          // Set initial state
          gsap.set(popupRef.current, {
            opacity: 0,
            y: 100,
            scale: 0.8
          });
          
          // Animate in
          gsap.to(popupRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          });
        }
      });
    } else {
      // Animate out first
      if (popupRef.current) {
        gsap.killTweensOf(popupRef.current);
        
        gsap.to(popupRef.current, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            // Remove from DOM after animation
            setPopupRender(false);
          }
        });
      } else {
        // If no ref, just remove from DOM
        setPopupRender(false);
      }
    }

    // Cleanup function
    return () => {
      if (popupRef.current) {
        gsap.killTweensOf(popupRef.current);
      }
    };
  }, [popupVisible]);

  // Memoize all model components
  // const laptopModel = useMemo(() => <LaptopModel />, []);
  // const scifiBoxModel = useMemo(() => <ScifiBoxModel />, []);
  // const magnifierModel = useMemo(() => <MagnifierModel />, []);
  // const mobileControllerModel = useMemo(() => <MobileControllerModel />, []);
  // const floatingObjectModel = useMemo(() => <FloatingObjectModel />, []);
  // const faceScannerModel = useMemo(() => <FaceScannerModel />, []);
  // const humanoidRobotModel = useMemo(() => <HumanoidRobotModel />, []);
  // const controlCenterModel = useMemo(() => <ControlCenterModel />, []);
  const smallRoboModel = useMemo(() => <SmallRoboModel />, []);
  // const coffeeBoxModel = useMemo(() => <CoffeeBoxModel />, []);

  const centerElementModel = useMemo(() => <CenterElementModel />, []);

  const booksModel = useMemo(() => <Books />, []);
  const animatedBookModel = useMemo(() => <AnimatedBook />, []);
  const penModel = useMemo(() => <Pen />, []);
  // const contactPhoneModel = useMemo(() => <ContactPhone />, []);
  const aboutCollageModel = useMemo(() => <AboutCollage />, []);
  // const globeSpinModel = useMemo(() => <GlobeSpin />, []);
  // const imageDisplayModel = useMemo(() => <ImageDisplayModel />, []);
  // const textRightModel = useMemo(() => <TextRight />, []);
  const startupRocketModel = useMemo(() => <StartupRocket />, []);
  // const routerModel = useMemo(() => <Router />, []);
  // const wifiModel = useMemo(() => <WifiModel />, []);
  const entranceTextModel = useMemo(() => <EntranceText />, []);
  const alternateWallModel = useMemo(() => <AlternateWall />, []);
  const contactModel = useMemo(() => <ContactModel />, []);
  const programsServiceModel = useMemo(() => <ProgramsService />, []);
  const secondPicModel = useMemo(() => <SecondPic />, []);
  const thirdPicModel = useMemo(() => <ThirdPic />, []);
  const fourthPicModel = useMemo(() => <FourthPic />, []);
  const blackObectModel = useMemo(() => <BlackObect />, []);
  // const sixStepsOneModel = useMemo(() => <SixStepsOne />, []);
  // const sixStepAiifModel = useMemo(() => <SixStepAiif />, []);

  const handlePopupAction = () => {
    console.log("Popup action clicked!");
    // Add your custom action here
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleTopTextVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('topText');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'topText') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleLeftTextVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('leftText');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'leftText') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleTextOneVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('textOne');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'textOne') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleTitleTextVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('titleText');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'titleText') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleTextTwoVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('textTwo');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'textTwo') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleTextThreeVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('textThree');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'textThree') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleTextFourVisibilityChange = (isVisible, content) => {
    if (isVisible) {
      setActiveController('textFour');
      setPopupVisible(true);
      setPopupContent(content);
    } else if (activeController === 'textFour') {
      setPopupVisible(false);
      setActiveController(null);
    }
  };

  const handleScrollIndicatorVisibilityChange = (isVisible) => {
    if (isVisible) {
      setActiveController('scrollIndicator');
      setScrollIndicatorVisible(true);
    } else if (activeController === 'scrollIndicator') {
      setActiveController(null);
      setScrollIndicatorVisible(false);
    }
  };



  return (
    <div className="w-full h-screen relative">
      
      <ModelPreloader />
      <CanvesWrapper>
      {/* <Suspense fallback={<CustomLoader />}> */}
        <Idel />
        {isMobile ? <MobileWall /> : <Wall />}
        <PatchWall />
        {/* {laptopModel} */}
        {/* {scifiBoxModel} */}

        {/* {magnifierModel} */}
        {/* {mobileControllerModel} */}
        {/* {floatingObjectModel} */}
        {/* {faceScannerModel} */}
        {/* {humanoidRobotModel} */}
        {/* {controlCenterModel} */}
        {/* {restaurantModel} */}
    

        {smallRoboModel}
        {/* {coffeeBoxModel}  */}
        {/* {bulbModel} */}
        {/* {vaultModel} */}
        {/* {bitcoinModel} */}
        {booksModel}
        {animatedBookModel}

        {penModel }
        {/* {contactPhoneModel} */}
        {aboutCollageModel}
        {/* {globeSpinModel} */}
        {/* {imageDisplayModel} */}
        {/* {textRightModel} */}
        {startupRocketModel}
        {centerElementModel}
        {/* {routerModel} */}
        {/* {wifiModel}  */}
        {entranceTextModel} 
        {alternateWallModel}
        {contactModel}
        {programsServiceModel}
        {secondPicModel}
        {thirdPicModel}
        {fourthPicModel}
        {blackObectModel}
        {/* {sixStepsOneModel}
        {sixStepAiifModel} */}
        {/* <AjkCollageNameText /> */}


        {/* Navs */}
        {/* <AboutNav />
        <ContactUsNav />
        <ServiceNav />
        <ResourceNav />
        <StartUpNav /> */}



        {/* Floating Text */}
        <Scanner />
        <ScannerTop />
        {/* <LaserLogo /> */}
        <AjkLogo />
        <TextTwo 
          title="From Idea to Launchpad"
          description="Fuel your vision with expert-led incubation and startup essentials."
          actionText="Learn More"
          onActionClick={handlePopupAction}
          showStartTime={23.05}
          showEndTime={23.85}
          onVisibilityChange={(isVisible) => handleTextTwoVisibilityChange(isVisible, {
            title: "From Idea to Launchpad",
            description: "Fuel your vision with expert-led incubation and startup essentials.",
            actionText: "Learn More",
            onActionClick: handlePopupAction,
            position: "justify-center"
          })}
        />
        <TextThree 
          title="Build Fast. Think Bold."
          description="Experience hands-on bootcamps that turn raw ideas into real solutions."
          actionText="Explore"
          onActionClick={handlePopupAction}
          showStartTime={24.10}
          showEndTime={24.40}
          onVisibilityChange={(isVisible) => handleTextThreeVisibilityChange(isVisible, {
            title: "Build Fast. Think Bold.",
            description: "Experience hands-on bootcamps that turn raw ideas into real solutions.",
            actionText: "Explore",
            onActionClick: handlePopupAction,
            position: "justify-center"
          })}
        />
        <TextFour 
          title="Mentors Who Move You Forward"
          description="1-on-1 sessions with startup experts to sharpen your pitch, product, and path."
          actionText="Connect"
          onActionClick={handlePopupAction}
          showStartTime={24.57}
          showEndTime={25.02}
          onVisibilityChange={(isVisible) => handleTextFourVisibilityChange(isVisible, {
            title: "Mentors Who Move You Forward",
            description: "1-on-1 sessions with startup experts to sharpen your pitch, product, and path.",
            actionText: "Connect",
            onActionClick: handlePopupAction,
            position: "justify-center"
          })}
        />
        {/* <TextFive /> */}

        {/* Banner */}
        {/* <BannerOne /> */}


        {/* <DoorOneText />
        <DoorTwoText />
        <DoorThreeText /> */}
        <RoboName />
        {/* <DoorFourText /> */}

        {/* Floating Text */}


        {/* touchups */}
        {/* <WallTouchUp /> */}

        {/* Timing Controller - Inside Canvas Context */}
        <RobotTopText 
          title="From Campus to Company Your Startup Journey Starts Here."
          description=""
          actionText="Get Started"
          onActionClick={handlePopupAction}
          showStartTime={19.56}
          showEndTime={21.0}
          onVisibilityChange={(isVisible) => handleTopTextVisibilityChange(isVisible, {
            title: "From Campus to Company Your Startup Journey Starts Here.",
            description: "",
            actionText: "Get Started",
            onActionClick: handlePopupAction,
            position: "justify-end"
          })}
        />

        {/* Second Timing Controller - Inside Canvas Context */}
        <RobotLeftText 
          title="Big ideas deserve Bigger stage."
          description=""
          actionText="Learn More"
          onActionClick={handlePopupAction}
          showStartTime={17.16}
          showEndTime={18.41}
          onVisibilityChange={(isVisible) => handleLeftTextVisibilityChange(isVisible, {
            title: "Big ideas deserve Bigger stage.",
            description: "",
            actionText: "Learn More",
            onActionClick: handlePopupAction,
            position: "justify-end"
          })}
        />

        {/* Third Timing Controller - Inside Canvas Context */}
        <TextOne 
          title="Big Dreams. Small Towns. Global Impact."
          description=""
          actionText="Explore"
          onActionClick={handlePopupAction}
          showStartTime={15.56}
          showEndTime={16.5}
          onVisibilityChange={(isVisible) => handleTextOneVisibilityChange(isVisible, {
            title: "Big Dreams. Small Towns. Global Impact.",
            description: "",
            actionText: "Explore",
            onActionClick: handlePopupAction,
            position: "justify-end"
          })}
        />

        {/* Fourth Timing Controller - Inside Canvas Context */}
        <TitleText 
          title="Launch Your Startup Before You Graduate. We Turn Ideas into Impact."
          description=""
          actionText="Start Now"
          onActionClick={handlePopupAction}
          showStartTime={14.60}
          showEndTime={15.25}
          onVisibilityChange={(isVisible) => handleTitleTextVisibilityChange(isVisible, {
            title: "Launch Your Startup Before You Graduate. We Turn Ideas into Impact.",
            description: "",
            actionText: "Start Now",
            onActionClick: handlePopupAction,
            position: "justify-center"
          })}
        />

        <ScrollIndicator 
          showStartTime={4.00}
          showEndTime={5.00}
          onVisibilityChange={handleScrollIndicatorVisibilityChange}
        />
     
      {/* </Suspense> */}
      </CanvesWrapper>

      {/* Scroll Indicator UI - Outside Canvas */}
      <ScrollIndicatorUI isVisible={scrollIndicatorVisible} />

      {/* Glass Popup - Outside Canvas */}
      {popupRender && (
        <div className={`fixed inset-0  flex items-center ${popupContent.position}`}>
          {/* Backdrop */}
          <div 
            ref={backdropRef}
            className="absolute inset-00 "
            onClick={handleClosePopup}
          ></div>
          
          {/* Glass Popup Card */}
          <div ref={popupRef} className="relative max-w-lg w-full mx-4">
            {/* Glass Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 scale-100">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl  opacity-50"></div>
            
               
              {/* Content */}
              <div className="relative z-10 text-center backdrop-blur-md bg-white border border-white/20 px-6 py-4 rounded-lg shadow-xl"
                   style={{ 
                     fontFamily: 'Ethnocentric, sans-serif',
                     fontSize: '1.2rem',
                     letterSpacing: '0.1em',
                     textTransform: 'uppercase'
                   }}>
                                 <h2 
                   className="mb-[15px]"
                 >
                   <span style={{
                     background: 'linear-gradient(135deg, #2e9661 0%, #306b77 50%, #32468a 100%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text',
                     color: 'transparent'
                   }}>
                     {popupContent.title}
                   </span>
                 </h2>
                {popupContent.description && (
                  <p className="text-lg text-white mb-4 tracking-wide" style={{ 
                    fontFamily: 'Ethnocentric, sans-serif',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(135deg, #2e9661 0%, #306b77 50%, #32468a 100%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text',
                     color: 'transparent'
                  }}>
                    {popupContent.description}
                  </p>
                )}
                
                {/* Action Button */}
              
              </div>
               
              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-pulse"></div>
            </div>
            
            {/* Floating Particles */}
            
          </div>
        </div>
      )}

    </div>
  );
}