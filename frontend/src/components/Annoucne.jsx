import React,{useState} from 'react';
import {CloseRoundedIcon} from '@material-ui/icons';
import CloseRounded from '@material-ui/icons/CloseRounded';
const Annoucne = () => {
  const [display, setdisplay] = useState("block")
  return <div className={`bg-[#8a4af3] font-bold h-10 text-white flex items-center justify-between px-12 ${display}`}>
      Hurry up 50% off Sale!
      <div className="" onClick={()=>{setdisplay("hidden")}}>
      <CloseRounded/>
      </div>
  </div>;
};

export default Annoucne;
