import { IconButton, Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import "./Comments.css";
import { ModalComment } from "./elementsComments/ModalComments.jsx";
import { AddComment } from "./elementsComments/AddComment.jsx";

export function Comments({ data }) {
  const {
    array,
    userName,
    modalShowComment,
    setModalShowComment,
    onClickModal,
    selectedObject,
  } = data;

  return (
    <section className="comments-container">
      <p className="title">Comentarios</p>

      <div className="container-section-comments">
        <div className="section-comments">
          {array.map((el) => {
            let comment;
            if (el.comment.length < 150) {
              comment = el.comment;
            } else {
              comment = el.comment.substring(0, 195);
              var showContinueReading = true;
            }

            return (
              <div className="card-comments" key={el.id}>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100px" }}>
                    <p className="name">{el.name}</p>
                    <Rating name="read-only" value={el.value} readOnly className="starts-comment" />
                  </div>

                  {userName.name === el.name && (
                    <IconButton className="buttonDelete-comment">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </div>

                <div className="container-comment">
                  <p
                    className="comment"
                    style={
                      showContinueReading
                        ? { height: "185px" }
                        : { maxHeight: "180px" }
                    }
                  >
                    {comment}
                    {showContinueReading && (
                      <>
                        <br />
                        <span onClick={() => onClickModal(el)}>
                          Ver comentario completo
                        </span>
                      </>
                    )}
                  </p>

                  <ModalComment
                    show={modalShowComment}
                    onHide={() => setModalShowComment(false)}
                    object={selectedObject}
                  />
                </div>
                <div className="triangle-comment"></div>
              </div>
            );
          })}
        </div>

        <AddComment />
      </div>
    </section>
  );
}
