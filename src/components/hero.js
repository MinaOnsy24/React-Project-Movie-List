import { useState } from "react"
import Card from "./card"

const Hero = () => {
    const [cards, setCards] = useState([
        {title: 'html',id:1},
        {title: 'css',id:2},
        {title: 'bootstrap',id:3},
        {title: 'js',id:4},
        {title: 'jQure',id:5},
        {title: 'fegma',id:6}
    ])
    return (
        <div className="my-5">
            <h1 className="text-center">My Services</h1>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquid tempore quaerat alias. Tenetur voluptatum perspiciatis</p>
            
            <div className="row">
                {
                    cards.map((card) => {
                        return (
                            <div className="col-4 p-3 bg-dark text-center" key={card.id} >
                                <Card cards={card} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Hero