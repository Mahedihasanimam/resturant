const ShopCard = ({item}) => {
    const {image,price,name,recipe}=item;
  return (

      <div className="card flex-1 bg-base-100 p-1 shadow-xl">
       
          <img className="p-2 rounded-md" src={image}  alt="item" />
        <strong className="absolute top-0 bg-black text-white px-2">{price} BDT</strong>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">{name}</h2>
          <p>
           {recipe}
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#f9e6b928] hover:bg-[#f9e6b928] text-[#BB8506] border-b-4 border-solid border-[#BB8506] hover:border-[#BB8506] btn-primary">
              Add to Card
            </button>
          </div>
        </div>
      </div>

  );
};

export default ShopCard;
