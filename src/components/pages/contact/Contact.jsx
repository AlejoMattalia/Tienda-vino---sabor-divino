import "./Contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

export function Contact() {
  //Mostrar mapa cuando cargue
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);

    // const iframe = document.querySelector("iframe");

    // const handleLoad = () => {
    //   setLoading(false);
    // };

    // if (iframe) {
    //   iframe.addEventListener("load", handleLoad);
    // }

    // return () => {
    //   if (iframe) {
    //     iframe.removeEventListener("load", handleLoad);
    //   }
    // };
  }, []);

  return (
    <article className="container-contact">
      <h3>CONTACTO</h3>

      <section className="container-info-contact">
        <section className="container-networks">
          <p className="phrase">
            CONTÁCTANOS POR SI NECESITAS AYUDA O SI TIENES ALGUN PROBLEMA{" "}
            <LocalPhoneIcon />
          </p>

          <div className="networks">
            <div className="container-icons-contacts">
              <a href="https://www.instagram.com/alejomattalia/">
                <InstagramIcon className="icon" style={{ fontSize: "50px" }} />
              </a>

              <div>
                <a href="https://www.instagram.com/alejomattalia/">
                  <p>INSTAGRAM</p>
                </a>
                <a href="https://www.instagram.com/alejomattalia/">
                  <p className="personal-information">@alejomattalia</p>
                </a>
              </div>
            </div>

            <div className="container-icons-contacts">
              <a
                href="https://api.whatsapp.com/send?phone=3468530707"
                target="_black"
              >
                <WhatsAppIcon className="icon" style={{ fontSize: "50px" }} />
              </a>

              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=3468530707"
                  target="_black"
                >
                  <p>WHATSAPP</p>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=3468530707"
                  target="_black"
                >
                  <p className="personal-information">+543 468 530 707</p>
                </a>
              </div>
            </div>

            <div className="container-icons-contacts">
              <a href="mailto:@alejoomattalia@gmail.com">
                <EmailIcon className="icon" style={{ fontSize: "50px" }} />
              </a>
              <div>
                <a href="mailto:@alejoomattalia@gmail.com">
                  <p>EMAIL</p>
                </a>

                <a href="mailto:@alejoomattalia@gmail.com">
                  <p className="personal-information">
                    @alejoomattalia@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-location">
          <div className="container-location-pharse">
            <p>
              <span>UBICACIÓN:</span> Buenos Aires 987, Corral de Bustos,
              Córdoba, Argentina
            </p>
            <p>
              <span>HORARIOS:</span> De lunes a viernes de 8hs a 13hs y de 16hs
              a 20:30hs <br /> Sábados de 9hs a 13hs
            </p>
          </div>

          {loading === false ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={300}
              style={{ backgroundColor: "#000", opacity: 0.9 }}
            />
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13342.973696128669!2d-62.16969088139953!3d-33.2732088189667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1689132038961!5m2!1ses!2sar"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          )}
        </section>
      </section>
    </article>
  );
}
