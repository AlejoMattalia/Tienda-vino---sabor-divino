import { useContext, useState } from "react";
import { Comments } from "./Comments";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { useFirebase } from "../../../hooks/useFirebase";
import { deleteDoc, collection, doc,  } from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig";

export function CommentsContainer() {
  //Abrir el modal para editar el comentario
  const [showModalEditComment, setShowModalEditComment] = useState(false);

  const [selectedComment, setSelectedComment] = useState({id: "", name: "", value: "", comment: ""})

  //Traemos el userName para que el usuario pueda eliminar el comentario
  const {userName, userNameGoogle} = useContext(AuthContext);


  //Abir modal con el comentario completo
  const [modalShowComment, setModalShowComment] = useState(false); 
  const [selectedObject, setSelectedObject] = useState({});
  const {data: dataComment} = useFirebase("comment")

  //Borrar el comentario
  const deleteComment = (id)=>{
    const collectionComment = collection(dataBase ,"comment")
    deleteDoc(doc(collectionComment, id))
  }


  const onClickModal = (object)=>{
    setModalShowComment(true);
    setSelectedObject(object)
  }

  const data = {
    dataComment,
    userName,
    modalShowComment,
    onClickModal,
    setModalShowComment,
    selectedObject,
    deleteComment,
    setShowModalEditComment,
    showModalEditComment,
    setSelectedComment,
    selectedComment,
    userNameGoogle
  };

  
  return <Comments data={data}/>;
}