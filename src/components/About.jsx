import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="lg:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          <span className="font-poppins font-bold">Hi,</span> Im <span className="font-poppins font-bold">Singgih Sutan Syach.👨‍💻</span>
        </p>
        <p className="font-poppins text-x lg:text-xl">Junior Frontend Developer. Based in Subang, Indonesia.</p>
        <br></br>
        <div className="lg:flex gap-32">
          <p>Full Name: Singgih Sutan Syach
            <br></br>
            <br></br>
            Date Of Birth: 20-February-2002
            <br></br>
            <br></br>
            Degree: Associate Degree Information System
          </p>
          <p>
            Addresss: Subang, Jawa Barat, Indonesia.
            <br></br>
            <br></br>
            Email: singgihfirst@gmail.com
            <br></br>
            <br></br>
            No.Telepon\whatsapp: +62 83101463182
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default About;
