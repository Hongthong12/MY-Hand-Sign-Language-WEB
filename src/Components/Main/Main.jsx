import React, { useEffect, useRef } from "react";
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'; // Using the free solid camera icon
import camera from '../../assets/Img/camera.png';

const Main = () => {
    <React.Fragment></React.Fragment>
  const videoRef = useRef(null);

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleCameraClick = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 300, height:300 , },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  };

  return (
    <div className="backgroun">
      <div className="pape">
        <p className="titles"> ປ່ຽນພາສາມືເປັນຂໍ້ຄວາມ </p>

        <div className="text">
          <img className='img' src={camera} alt="camera Logo" />
          <h1 className="text1"> ເປີດກ້ອງ </h1>
        </div>

        <button className="camera" onClick={handleCameraClick}>
            <div className="circle">
          <FontAwesomeIcon icon={faCamera} className="icon" />
          </div>
          <h2 className="open"> ຄິກເພື່ອເປີດກ້ອງ </h2>
        </button>

        <div className=" re-video">
        <div className="video-container">
          <video className="video" ref={videoRef}></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
