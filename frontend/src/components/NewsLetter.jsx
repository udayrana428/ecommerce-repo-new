import React, { useRef ,useState} from "react";
import { Send } from "@material-ui/icons";
import emailjs from "emailjs-com";

const NewsLetter = () => {
  const [inputs, setinputs] = useState({name:"",email:""})
  const handleChange=(e)=>{
    e.preventDefault()
    setinputs({...inputs,[e.target.name]:e.target.value})
  }
  const form=useRef()
  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_4vu8aiw', 'template_odczi04', form.current, 'user_HN0dPxZErlecopm96RzT7').then(res=>{
      console.log("Success")
      setinputs({name:"",email:""})
    }).catch(err=>{console.log("Failed")})
  }
  return (
    <div className="flex justify-around items-center h-[350px] w-[100%] bg-[#c4a4f9]">
      <div className="smm:hidden">
        <img
          className="rounded-full"
          src="https://store.webkul.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/e/website-store-pickup.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center mobile:text-center">
        <h1 className="text-[2rem] font-bold">Subscribe To Our NewsLetter!</h1>
        <h2 className="text-[1.5rem] mobile:text-center mobile:p-3">
          Always in touch with us, for your favourite Products.
        </h2>
        <div className="flex item-center justify-between min-w-[30rem] min-h-[2rem] border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
          <form ref={form} onSubmit={sendEmail} className="smm:text-center">
            <input
              className="border-none pl-[20px] m-3 p-2 mobile:p-[0.5rem] rounded-lg flex-[8]"
              type="text"
              placeholder="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
            <input
              className="border-none pl-[20px] m-1 p-2 mobile:p-[0.5rem] rounded-lg flex-[8]"
              type="email"
              placeholder="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />

            <button className="bg-[#46a149] flex-1 mobile:w-[90vw]">
              <Send className="text-white hover:bg-gray-400 w-3" fontSize="large" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
