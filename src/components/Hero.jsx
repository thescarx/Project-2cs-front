import React, { useState } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./PickImages"
import PickImages from "./PickImages";
import RealTime from "./RealTime";
import PredictionOnSelectedImages from "./PredictionOnSelectedImages";

function Hero() {
  const [selectedImages, setSelectedImages] = useState([])

  const handleSelectedImages = (images) => {
    setSelectedImages(images);
  };
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} `}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
            <img src={discount} alt="discount" className=" w-[32px] h-[32px] " />
          </div>
          <div className=" flex flex-row  justify-between  items-center w-full">
            <h1 className=" flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white">
              The Next <br className="sm:block hidden" />{" "}
              <span className=" text-gradient">Generation</span> <br />
              </h1>
            <div className=" ss:flex hidden md:mr-4 mr-0" >
              <PickImages onImagesSelected={handleSelectedImages}/>
            </div>
            <div className=" ss:flex hidden md:mr-4 mr-0" >
              <RealTime/>
            </div>
          </div>
          <p className={`${styles.paragraph} max-w-[470] mt-5`} > 
                    Experience the power of our two cutting-edge models, Model A for face recognition and Model B for emotions prediction, designed to deliver unparalleled 
                    performance and versatility for all your needs.</p>
        </div>
        <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] blend-bg-gray-500 rounded-md" />
          
          <div className=" absolute z-[0] w-[40%] h-[35%] pink__gradient top-0 " />
          <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 " />
          <div className=" absolute z-[0] w-[50%] h-[50%] blue__gradient right-20 bottom-20" />
        </div>
      </section>
      {
        selectedImages.length !== 0 ? <div className=" flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] "  >
          <PredictionOnSelectedImages images={selectedImages}/> </div>: <></>
      }
      </>
  );
}

export default Hero;
