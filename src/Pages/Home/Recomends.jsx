import SectionTitle from "../../components/SectionTitle";
import recoment1 from "../../assets/home/01.jpg"

const Recomends = () => {
  return (
    <div>
        <SectionTitle subtitle={'Should try'} title={'chef recomends'}/>
      <div className="grid gap-12 px-4 my-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={recoment1}
            alt="item"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Caeser Salad</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.</p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#f9e6b928] hover:bg-[#f9e6b928] text-[#BB8506] border-b-4 border-solid border-[#BB8506] hover:border-[#BB8506] btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={recoment1}
            alt="item"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Caeser Salad</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.</p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#f9e6b928] hover:bg-[#f9e6b928] text-[#BB8506] border-b-4 border-solid border-[#BB8506] hover:border-[#BB8506] btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={recoment1}
            alt="item"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">Caeser Salad</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.</p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#f9e6b928] hover:bg-[#f9e6b928] text-[#BB8506] border-b-4 border-solid border-[#BB8506] hover:border-[#BB8506] btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Recomends;
