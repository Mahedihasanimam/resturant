

const Menu = ({item}) => {
    const {image,price,name,recipe}=item;
    return (
        <div className="flex gap-4  justify-center text-gray-600">
            <img style={{borderRadius:'0px 70px 70px'}} className="w-28 h-24 " src={image} alt="" />
            <div className="pt-4">
                <h3 className="font-bold">{name} ------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 pt-4">${price}</p>
        </div>
    );
};

export default Menu;