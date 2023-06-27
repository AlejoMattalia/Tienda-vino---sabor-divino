import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../cards/Card";
import "./CarouselProducts.css";


export function CarouselProducts({ title, array }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 900 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  console.log(array)
  return (
    <div className="container-carousel">
      <h3 className="title-carousel">{title}</h3>

      <Carousel responsive={responsive}>
        {
          array !== undefined &&
          array.map((el)=>{
            return(
              <Card key={el.id} title={el.name} price={el.price} image={el.img}/>
            )
          })
        }
      </Carousel>
    </div>
  );
}
