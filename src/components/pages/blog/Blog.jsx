import "./Blog.css";
import { news } from "../../../api/news.js";
import { Fade } from "react-awesome-reveal";

export function Blog() {
  return (
    <article className="contianer-blog">

      <h1>BLOG DEL VINO</h1>
      {news.map((el) => {
        return (
          <>
          <Fade direction="left" duration={2000}>
            <section className="container-blog-news" key={el.id}>
              <div className="container-img">
                <a
                  href={el.link}
                  target="_black"
                >
                  <img
                    src={el.img}
                    alt=""
                  />
                </a>
              </div>

              <div className="container-info">
                <h3>{el.title}</h3>
                <p>{el.paragraph}</p>
                <a
                  href={el.link}
                  target="_black"
                >
                  <button
                    type="button"
                    className="btn btn-light"
                    data-mdb-ripple-color="dark"
                  >
                    Ir al sitio
                  </button>
                </a>
              </div>
            </section>
            </Fade>
          </>
        );
      })}
    </article>
  );
}
