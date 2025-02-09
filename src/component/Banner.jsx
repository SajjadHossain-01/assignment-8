import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import Products from "./Products";
const Banner = () => {
  return (
    <div className=" container m-auto ">
      <div className="flex flex-col gap-14 items-center -mt-18 text-white bg-[#9538E2] rounded-3xl pt-20 pb-30">
        <h1 className=" lg:text-6xl text-3xl text-center sora-font">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-center sora-font">
          Explore the latest gadgets that will take your experience to the next{" "}
          <br />
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to={"/Product"}>
          <button className="py-3.5 px-8 rounded-4xl mb-7 bg-white text-[#9538E2] sora-font font-extrabold">
            Shop now
          </button>
        </Link>
      </div>
      <div className="bg-[#FFFFFF4D] rounded-3xl p-5 max-w-[1110px] m-auto -mt-32">
        <img className=" object-cover rounded-3xl " src={bannerImage} alt="" />
      </div>
      <Products></Products>
    </div>
  );
};

export default Banner;
