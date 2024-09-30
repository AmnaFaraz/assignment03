import Header from "./component/header";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header/> 
      
      <div className="bg-teal-400 flex-grow p-8"> 
        <div className="text-[60px] font-black text-center"> 
          <br />
          Hello World
          <br/>
          Welcome
        </div>
      </div>
      
      <Footer/> 
    </div>
  );
}




