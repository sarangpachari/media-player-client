import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistoryAPI, getAllHistoryAPI } from "../services/allAPI";

const History = () => {
  const [allVideoHistory, setAllVideoHistory] = useState([]);

  //GETTING ALL HISTORY WHILE OPENING PAGE AT FIRST
  useEffect(() => {
    getAllHistory();
  }, []);

  //GETTING ALl hiSTORY FROM SERVER
  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllVideoHistory(result.data);
      } else {
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // REMOVING HISTORY
  const removeHistory = async (id) => {
    try {
      await deleteHistoryAPI(id);
      getAllHistory();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={"/home"}>Back to Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {allVideoHistory?.length > 0 ? (
            allVideoHistory?.map((videoDetails, index) => (
              <tr key={videoDetails?.id}>
                <td>{index + 1}</td>
                <td>{videoDetails?.caption}</td>
                <td>
                  <a target="_blank" href={`${videoDetails?.youtubeLink}`}>
                    {videoDetails?.youtubeLink}
                  </a>
                </td>
                <td>{videoDetails?.timeStamp}</td>
                <td>
                  <button
                    onClick={() => removeHistory(videoDetails?.id)}
                    className="btn"
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div className="fw-bolder text-danger">No Watch History !</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
