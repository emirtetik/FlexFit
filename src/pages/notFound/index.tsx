import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Error } from "../../components/Error";

const NotFound = () => {
  return (
   <div className=" flex flex-col items-center justify-center bg-background text-white p-6">
      <div className="">
        <Error/>
      </div>
      <h2 className="text-3xl font-mont-semi mb-4 text-white text-center">
        Sayfa Bulunamadı
      </h2>
      <Link
        to="/"
        className="flex items-center gap-2 bg-secondary text-black px-5 py-3 rounded-2xl font-mont-bold transition hover:opacity-90 mt-4"
      >
        <BsArrowLeft size={20} />
        Ana Sayfa
      </Link>
    </div>
  );
};

export default NotFound;
