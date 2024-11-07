import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { saveVideoAPI } from "../services/allAPI";

const Add = ({setAddResponseFromHome}) => {
  const [invalidYouTubeLink, setInvalidYouTubeLink] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    youtubeLink: "",
  });

  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Embed Link creating function
  const embedLinkCreate = (userInputYoutubeLink) => {
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0, 11);
      setInvalidYouTubeLink(false);
      setVideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      setInvalidYouTubeLink(true);
      setVideoDetails({ ...videoDetails, youtubeLink: "" });
    }
  };

  //Upload Video ADD Button Function
  const handleUploadVideo = async () => {
    const { caption, imgUrl, youtubeLink } = videoDetails;
    if (caption && imgUrl && youtubeLink) {
      try {
        const result = await saveVideoAPI(videoDetails);
        
        if (result.status >= 200 && result.status < 300) {
          alert("Video Uploaded Succesfully !");
          handleClose();
          setAddResponseFromHome(result)
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <button
          onClick={handleShow}
          className="btn btn-warning mx-3 rounded-circle fw-bolder fs-5"
        >
          +
        </button>
        <h5>Upload New Video</h5>
      </div>

      {/* MODAL FOR UPLOAD VIDEO */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingUrl"
              label="Video Image URL"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imgUrl: e.target.value })
                }
                type="text"
                placeholder="Video Image URL"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingLink"
              label="Video Youtube Link"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => embedLinkCreate(e.target.value)}
                type="text"
                placeholder="Video Youtube Link"
              />
            </FloatingLabel>
            {invalidYouTubeLink && (
              <div className="text-danger fw-bolder mt-2">
                Invalid Youtube Link..Please Try other !
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleUploadVideo}
            className="btn btn-info"
            variant="primary"
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
