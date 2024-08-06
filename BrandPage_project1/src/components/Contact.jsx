import React from "react";
import NavLinks from "./NavLinks";
import Contactbtn from "./Contactbtn";
import TextBox from "./TextBox";

function Contact() {
  return (
    <>
      <div className="mt-9 mr-[100px] flex justify-end ">
        <NavLinks />
      </div>
      <div className="px-[150px] py-14 ">
        <div className="contact uppercase font text-[50px] font-extrabold ">
          contact us
        </div>
        <div className="w-[70%] mt-5 text-gray-500 font-semibold">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </div>

        <div className="flex">
          <div className="leftside w-[50%] mt-16 pl-2">
            <div className="btns flex ">
              <Contactbtn text="via support chat " />
              <Contactbtn text="via call" />
            </div>
            <div className="uppercase border-2 border-black w-[400px] flex justify-center items-center mt-7 font-bold rounded-lg py-2">
              via email form
            </div>
            <TextBox text="name" />
            <TextBox text="e-mail" />
            <div className="flex mt-9 justify-center mr-7">
              <Contactbtn text="submit" />
            </div>
          </div>
          <div className="rightside w-[50%]">
            <img src="src\assets\Service 24_7-pana 1.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
