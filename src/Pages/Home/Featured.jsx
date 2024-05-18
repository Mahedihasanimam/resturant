import featuredimage from "../../assets/home/featured.jpg"
import SectionTitle from "../../components/SectionTitle";


const Featured = () => {
  return (
    <div className="bg-mybg bg-fixed bg-cover  mb-4 text-white ">
       {/* <div className="bg-black h-full w-fit absolute opacity-20 ">

       </div> */}
       <div className="pt-8">
       <SectionTitle  subtitle={'Check it out'} title={'FROM OUR MENU'}/>
        
       </div>
      <div className="flex bg-slate-500 opacity-70  justify-center z-10 items-center py-8 pb-20 lg:flex-row md:flex-row flex-col gap-10 ">
        <img className="w-2/6 " src={featuredimage} alt="" />
        <div className="w-1/2 text-white font-bold">
          <strong>March 20, 2023</strong>
          <h3 className="text-lg font-bold">WHERE CAN I GET SOME?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum sunt, et laborum asperiores quidem in totam placeat architecto debitis.</p>
          <button href="#_" className=" block  my-4 text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">View Full Menu</span>
            </span>
   
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
