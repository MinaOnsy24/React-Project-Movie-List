export default function Card({cards}) {
// console.log(cards)

    return (
        <>
                <span className=" w-50" >
                    <i className="fa-brands fa-facebook text-warning" ></i>
                </span>
                <p>{cards.title}</p>
        </>
    )
} 