import { useContext, useState } from "react";
import { Comments } from "./Comments";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { useFirebase } from "../../../hooks/useFirebase";
import { deleteDoc, collection, doc,  } from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig";

export function CommentsContainer() {

  //Traemos el userName para que el usuario pueda eliminar el comentario
  const {userName} = useContext(AuthContext);


  //Abir modal con el comentario completo
  const [modalShowComment, setModalShowComment] = useState(false); 
  const [selectedObject, setSelectedObject] = useState({});
  const {data: dataComment} = useFirebase("comment")

  
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
    deleteComment
  };

  
  return <Comments data={data}/>;
}