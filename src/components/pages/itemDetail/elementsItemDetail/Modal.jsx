import React, { useState } from "react";
import "../ItemDetail.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export function Modal({ description }) {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => {
    setCentredModal(!centredModal);

    const rootElement = document.documentElement;
    const currentOverflow = rootElement.style.overflow;

    if (currentOverflow === "hidden") {
      rootElement.style.overflow = "";
    } else {
      rootElement.style.overflow = "hidden";
    }
  };

  return (
    <>
      <p onClick={toggleShow} className="button-modal">
        Descripción
      </p>

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Descripción</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                {" "}
                -&nbsp;
                {description !== undefined &&
                  description.split("\\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {index !== 0 && "- "}
                      {line}
                      {index !== description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Salir
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
