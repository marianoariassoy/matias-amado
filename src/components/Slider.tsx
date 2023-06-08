import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import { Whatsapp } from "./MySvgs";

type SliderItemProps = {
  src: string;
  alt: string;
};

const SliderItem = ({ src, alt }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? <Loader /> : <img src={src} alt={alt} className="fade-in h-full object-cover" />;
};

const Slider = () => {
  const { data, loading } = useFetch(`/imagenes`);

  const properties = {
    arrows: false,
    transitionDuration: 700,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  };

  return (
    <section className="h-screen overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <Slide {...properties}>
          {data.map((image) => (
            <SliderItem key={image.id} src={image.image} alt="" />
          ))}
        </Slide>
      )}

      <a href="https://wa.me/5493874685060" target="_blank" rel="noreferrer" className="fixed z-20 bottom-8 right-8 drop-shadow-hover drop-shadow svg-primary">
        <Whatsapp />
      </a>
    </section>
  );
};

export default Slider;
