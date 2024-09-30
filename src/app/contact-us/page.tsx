import Header from "../component/header"
import Footer from "../component/footer"

export default function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      
      <div className="bg-teal-400 min-h-[80vh] p-8">
        <div className="text-[60px] :text-[60px] font-black">
          Contact Us
        </div>
      </div>
      <Footer/>
    </div>
  );
}
