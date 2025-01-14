import { Link } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";

const Items = ({ data }) => {
  return (
    <article className="item border border-black relative">
      <div className="item-img">
        <Link to={data.url}>
          <div className="aspect-video object-cover hover:opacity-80 transition-opacity">
            <ImageComponent src={data.image} alt={data.title} />
          </div>
        </Link>
      </div>
      <div className="item-txt p-4 pb-20">
        <h3 className="text-sm text-black">{data.category}</h3>
        <h2 className="text-xl font-bold mb-3">{data.title}</h2>
        <p className="text-gray-600 text-sm">{data.text}</p>
      </div>
      <Link
        to={data.url}
        className="bg-primary font-bold text-white absolute bottom-0 right-4 px-6 py-3 hover:bg-black transition-colors"
      >
        Consulta
      </Link>
    </article>
  );
};

export default Items;
