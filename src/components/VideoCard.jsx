import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { deleteVideoAPI, saveHistoryAPI } from "../services/allAPI";

const VideoCard = ({ displayData, setDeleteVideoResponseFromVideoCard, insideCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    //Display Modal
    setShow(true);
    //History Saving
    const { caption, youtubeLink } = displayData;
    const sysDateTime = new Date();
    const timeStamp = sysDateTime.toLocaleString("en-US", {
      timeZoneName: "short",
    });
    const historyDetails = { caption, youtubeLink, timeStamp };
    try {
      await saveHistoryAPI(historyDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id)=>{
    try {
     const result =  await deleteVideoAPI(id)
     setDeleteVideoResponseFromVideoCard(result)

    } catch (error) {
      console.log(error);
      
    }
  }

  //Dragging Functions
  const videoCardDragStarted = (e, dragVideoDetails)=>{
    console.log(`Video id :`+dragVideoDetails?.id);
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }

  return (
    <>
      <Card draggable={true} onDragStart={(e)=>videoCardDragStarted(e,displayData)} style={{ height: "250px" }}>
        <Card.Img
          onClick={handleShow}
          height={"150px"}
          variant="top"
          src={displayData?.imgUrl}
        />
        <Card.Body>
          <Card.Text className="d-flex justify-content-between">
            <p>{displayData?.caption}</p>
            {
              !insideCategory &&
              <button onClick={()=>deleteVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
            }
          </Card.Text>
        </Card.Body>
      </Card>

      {/* MODAL CODE */}
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="360"
            src={`${displayData?.youtubeLink}?autoplay=1`}
            title="Caption"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
