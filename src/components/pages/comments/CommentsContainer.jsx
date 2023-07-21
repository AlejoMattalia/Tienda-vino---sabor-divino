import { useContext, useState } from "react";
import { Comments } from "./Comments";
import { AuthContext } from "../../../context/AuthContext.jsx"

export function CommentsContainer() {

  //Traemos el userName para que el usuario pueda eliminar el comentario
  const {userName} = useContext(AuthContext);

  //Abir modal con el comentario completo
  const [modalShowComment, setModalShowComment] = useState(false); 
  const [selectedObject, setSelectedObject] = useState({});

  const onClickModal = (object)=>{
    setModalShowComment(true);
    setSelectedObject(object)
  }

  let array = [
    {
      id: 1,
      name: "AlejoM",
      value: 3,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco123456789123456789121234567891.  suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco123456789123456789121234567891.",
    },

    {
      id: 2,
      name: "AlejoMattalia",
      value: 5,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco1234567891234567891212345678",
    },

    {
      id: 3,
      name: "AlejoMattaliaaaa",
      value: 1,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. ",
    },

    {
      id: 4,
      name: "AlejoMattaliaaaa",
      value: 1,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. ",
    },

    {
      id: 5,
      name: "AlejoMattaliaaaa",
      value: 1,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. ",
    },

    {
      id: 6,
      name: "AlejoM",
      value: 3,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco123456789123456789121234567891.  suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco123456789123456789121234567891.",
    },

    {
      id: 2,
      name: "AlejoMattalia",
      value: 5,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco1234567891234567891212345678",
    },

    {
      id: 3,
      name: "AlejoMattaliaaaa",
      value: 1,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. ",
    },

    {
      id: 4,
      name: "AlejoMattaliaaaa",
      value: 1,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. ",
    },

    {
      id: 5,
      name: "AlejoMattaliaaaa",
      value: 1,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. ",
    },

    {
      id: 6,
      name: "AlejoM",
      value: 3,
      comment:
        "En un tranquilo pueblo, la brisa acaricia suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco123456789123456789121234567891.  suavemente las hojas de los árboles mientras el río serpentea entre colinas verdes. Los lugareños disfrutan de la paz y la armonía en este rincón pintoresco123456789123456789121234567891.",
    },
  ];

  const data = {
    array,
    userName,
    modalShowComment,
    onClickModal,
    setModalShowComment,
    selectedObject
  };

  return <Comments data={data}/>;
}