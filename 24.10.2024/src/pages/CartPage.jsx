import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { Card } from "../UI/Card";

export function CartPage() {
    const {carts} = useSelector(state => state.carts)
    console.log(carts);
    return (
        <main>
            <Header></Header>
            <h1>Cart</h1>
            {carts.map((product) => (
                <Card
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    typeBtn="delete"
                />
            ))}
        </main>
    )
}