
import { useState } from 'react';
import useTitle from '../component/useTitle';
import Cart from '../component/Cart';
import Wishlist from '../component/Wishlist';

const Dashboard = () => {
  useTitle("Dashboard")
  const [isActive ,setIsActive]=useState(true)
  console.log(isActive);
  return (
    <div >
      <div className="bg-[#9538E2] pt-11 pb-10 flex flex-col items-center gap-10">
        <h1 className="text-4xl font-semibold text-center text-white sora-font">
        Dashboard
        </h1>
        <p className="text-center text-white sora-font2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className='flex gap-5'>
          <button onClick={()=>setIsActive(true)} className={` px-16  rounded-4xl text-xl py-3 ${isActive ? 'bg-white text-[#9538E2] sora-font':'border-1 border-white sora-font2 text-white'}`}>Cart</button>
          <button onClick={()=>setIsActive(false)} className={` px-16  rounded-4xl text-xl py-3 ${!isActive ? 'bg-white text-[#9538E2] sora-font':'border-1 border-white sora-font2 text-white'}`}>Wishlist</button>
        </div>
      </div>
      <div>
        {
          isActive && <Cart></Cart>
        }
        {
          !isActive && <Wishlist></Wishlist>
        }
      </div>
    </div>
  );
};

export default Dashboard;