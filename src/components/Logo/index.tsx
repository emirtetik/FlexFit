import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
export default function Logo() {
  return (
    <div className="">
      <Link to="/" className="flex items-center px-5 ">
        <div className="flex flex-col items-center ">
         <img src={logo} alt="logo" className="w-24 h-auto"/>
        </div>
      </Link>
    </div>
  );
}