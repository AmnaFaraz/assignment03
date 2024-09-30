import Header from "../component/header";
import Footer from "../component/footer";

import Image from 'next/image';
import pfp from "/image/pfp.jpeg";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header/>

      <div className="bg-teal-400 flex-grow p-8"> 
        <div className="flex flex-col lg:flex-row items-center"> 
          
          <div className="w-fit m-4 p-4 border-8 border-white"> 
            <h1 className="text-[60px] font-black"> 
              Hey,
              <br />
              My Name is <span className="text-orange-700">Amna Faraz</span>
            </h1>
            <p className="text-[20px] lg:text-[30px] mt-4"> 
              I am a Next JS Developer
              <br />
              I am learning AI, Metaverse, and Web 3.0 from GIAIC
            </p>
          </div>

          <div className="border-4 border-white rounded-full p-2 bg-white ml-4"> 
            <Image
              src={pfp}
              alt="Profile Picture"
              width={300} 
              height={300}
              className=" w-64.5 h-64.5 rounded-full" 
            />
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
}
