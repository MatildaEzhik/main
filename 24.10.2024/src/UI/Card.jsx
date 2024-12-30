export function Card({ title, price, typeBtn="Add"}) {
    return (
        <div className="card">
            <hgroup className="card__header">
                <h2 className="card__title">{title}</h2>
                <p className="card__price">${price}</p>
            </hgroup>
            <button className="card__btn">{typeBtn=="delete"?"Delate":"Buy"}</button>
        </div>
    )
}