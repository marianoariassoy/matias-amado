import Image from "../components/ImageComponent";

const More = () => {
  return (
    <section className="flex items-center justify-center" id="section-more">
      <div className="absolute p-8 text-center z-10 text-white text-4xl md:text-5xl">
        <h1 className="font-bold mb-2">Estética cosmética</h1>
        <h2 className="mb-8 font-light">¿Necesitas asesoramiento?</h2>
        <button className="bg-primary px-12 py-3 font-bold text-xl hover:bg-black transition-all">Contactanos</button>
      </div>

      <Image src="https://thk-avalos.com/backend/images/avalos_cc370695f9.jpg" alt="" />
    </section>
  );
};

export default More;
