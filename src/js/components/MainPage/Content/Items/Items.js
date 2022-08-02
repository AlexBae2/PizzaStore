import Item from "./Item/Item";
import {useSelector} from "react-redux";

const Items = () => {

    const pizzas = useSelector((state) => state.main.pizzas)

    const filterCategory = useSelector((state) => state.main.filterCategory);

    return (
        <div className="content__items">

            {pizzas.filter(pizza => pizza.types.includes(filterCategory)).map((pizza, indexPizza) =>
                <Item
                index={pizza.id} count={pizza.count} urlImg={pizza.url}
                title={pizza.title} price={pizza.price} sizes={pizza.size}
                doughs={pizza.dough}
                activeDough={pizza.active_dough}
                activeSize={pizza.active_size}/>
            )}

        </div>
    )
};

export default Items;