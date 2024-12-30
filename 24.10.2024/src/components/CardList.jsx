import { useDispatch, useSelector } from "react-redux";
import { Card } from "../UI/Card";
import { addInCart } from "../redux/slice/cart";

export function CardList() {
    const { products } = useSelector(state => state.product)
    const dispatch = useDispatch();
    const handlerAddInCart = (e) => {
        let index = e.currentTarget.dataset.index;
        const action = addInCart(products[index])
        dispatch(action)
    }
    
    return (
        <div className="card__list">
            <h2 className="title">Cards</h2>
            <section className="list">
                {products.map((card, index) => (
                    <div key={card.id} data-index={index} onClick={handlerAddInCart}>
                        <Card id={card.id} title={card.title} price={card.price} />
                    </div>
                ))}
            </section>
        </div>
    )
}