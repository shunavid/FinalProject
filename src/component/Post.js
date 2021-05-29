import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function Post({ article }) {
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const { name, imagevideo, description } = article.fields;

  const toggle = () => setModal(!modal);

  const handleModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    toggle();
  };

  return (
    <div className="videos-container mb-5">
      <Card className="our-cards">
        <CardBody
          style={{ backgroundColor: "cadetblue" }}
          className="bg-primary rounded-lg modal-lg"
        >
          <div className="card-content-top">
            <CardTitle tag="h5" className="mb-2 pt-3">
              {name}
            </CardTitle>
          </div>
          {imagevideo && (
            <img
              className="our-image"
              width="60%"
              src={imagevideo.fields.file.url}
              alt={name}
            />
          )}
          <Button
            style={{ backgroundColor: "cadetblue" }}
            className="modal-button"
            onClick={() =>
              handleModal(
                name,
                <img width="100%" src={imagevideo.fields.file.url} alt={name} />
              )
            }
          >
            Image
          </Button>
          <Button
            style={{ backgroundColor: "cadetblue", marginLeft: "2px" }}
            className="modal-button"
          >
            Video
          </Button>
          <Button
            className="modal-button"
            style={{ backgroundColor: "cadetblue", marginLeft: "2px" }}
            onClick={() => handleModal(name, description)}
          >
            Text
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          style={{ backgroundColor: "cadetblue", textAlign: "center" }}
          toggle={toggle}
        >
          {modalTitle}
        </ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            X
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    //   {/*
    //  <div className="videos-container">
    //   <div className="main-body">
    //     <div className="head-file">
    //       <h2>{name}</h2>
    //     </div>
    //     <p className="titles"> {description}</p>
    //     {imagevideo && (
    //       <img src={imagevideo.fields.file.url} className="globe-image" />
    //     )}

    //     <button className="btn-infos">Image</button>
    //     <button className="btn-infos">Video</button>
    //     <button className="btn-infos">Text</button>
    //   </div>
    // </div>
    // */}
  );
}

export default Post;
