import React from 'react'
import styles from "../style"
import { arrowUp} from "../assets"
import { useRef } from 'react';
import axios from 'axios';
function PickImages({ onImagesSelected }) {
  const fileInputRef = useRef(null);
  const handleClick = () => {
    onImagesSelected([]);
    fileInputRef.current.click();
  };
  const Predict=((images)=>{
    const imagesArray = [];

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const objectURL = URL.createObjectURL(file);
      const imageObject = {
        url: objectURL,
        name: file.name,
        emotion: 'happy' 
      };
      imagesArray.push(imageObject);
    }
    // const formData = new FormData();
    // images.forEach((image, index) => {
    //   formData.append(`image${index}`, image.file);
    // });
    ///////////////   API HERE   /////////////////////////

    // try {
    //   axios.post('PREDICTION', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   }).then(data =>{
    //     const imageObject = {
    //       url: data.imageUrl,
    //       name: data.name,
    //       emotion: data.emotion
    //     };
    //     imagesArray.push(imageObject);
    //   });
      
    // } catch (error) {
    //   console.error(error);
    // }


    onImagesSelected(imagesArray);
  })
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={handleClick}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} > 
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px] mr-2'  >
                  <span className=' text-gradient' >Pick</span>
                </p>
                <img src={arrowUp} alt="arrow" className=' w-[23px] h-[23px] object-contain' />

               </div>
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px]'  >
                  <span className=' text-gradient' >Images</span>
                </p>

               </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={(event) => Predict(event.target.files)}
          />
    </div>
  )
}

export default PickImages