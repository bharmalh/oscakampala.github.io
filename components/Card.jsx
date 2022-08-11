/** @format */

import { Link } from "react-feather";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Card({ url, leadImg, leadName, leadLang }) {
  const handleClick = () => {
    console.log(url);
  };

  return (
    <div className="shadow shadow-black-500/40 p-10 rounded">
      <div className="relative w-[250px] h-[350px] overflow-auto">
        <Image
          src={leadImg}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />{" "}
      </div>
      <div className="flex justify-between container px-2 py-4 ">
        <div>
          <h3>{leadName}</h3>
          <p className="banner">{leadLang}</p>
        </div>

        <div className="flex gap-2">
          <div className="cursor-pointer">
            {" "}
            <FaLinkedin size={20}/>
          </div>
          <div className="cursor-pointer">
            <FaTwitter size={20}/>
          </div>
          <div className="cursor-pointer">
            <FaGithub size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;