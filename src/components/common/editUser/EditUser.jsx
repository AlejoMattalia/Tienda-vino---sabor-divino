import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EmailEdit } from "./elementsEditUser/EmailEdit";
import { UserNameEdit } from "./elementsEditUser/UserNameEdit";
import { Password } from "./elementsEditUser/Password";
import { PasswordRepeat } from "./elementsEditUser/PasswordRepeat";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export function EditUser(props) {

  const {userName} = useContext(AuthContext);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <UserNameEdit name={userName.name}/>
          <EmailEdit email={userName.email}/>
          <Password/>
          <PasswordRepeat/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
