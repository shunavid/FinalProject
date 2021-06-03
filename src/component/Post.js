import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import InfoVideos from "./InfoVideos";
import ImageCarousel from "./ImageCarousel";

function Post({ article }) {
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const { name, imagevideo, description } = article.fields;

  const toggle = () => setModal(!modal);

  const handleModal = (title, content) => {
    console.log("content", content);
    setModalTitle(title);
    setModalContent(content);
    toggle();
  };

  return (
    <div className="videos-container ">
      <Card className="our-cards">
        <CardBody className=" bg-secondary rounded-lg modal-lg   ">
          <div className="card-content-top mt-6 ">
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
              handleModal(name, <ImageCarousel article={article.fields} />)
            }
          >
            Image
          </Button>
          <Button
            style={{ backgroundColor: "cadetblue", marginLeft: "2px" }}
            className="modal-button"
            onClick={() =>
              handleModal(name, <InfoVideos url={article.fields.videos} />)
            }
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
        <ModalFooter style={{ backgroundColor: "cadetblue" }}>
          <Button color="danger" onClick={toggle}>
            X
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Post;
