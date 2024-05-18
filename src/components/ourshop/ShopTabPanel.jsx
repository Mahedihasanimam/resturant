
import ShopCard from '../../shared/ShopCard';

const ShopTabPanel = ({shiopitem}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-6 space-y-4 gap-4 mb-16 z-20">
          {
                shiopitem.map(item=><ShopCard key={item._id} item={item}></ShopCard>)
            }
          </div>
    );
};

export default ShopTabPanel;