import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom"
// import { incrementCounter } from "../Store/slices/Counter";
import { LanguageContext } from "../context/language";
import { add } from "../Store/slices/favMovie";





export default function Moves() {
    const [Moves, setMoves] = useState([])
    const { lang, setLange } = useContext(LanguageContext)

    //to get data
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: "47341e3647317dc97dc29a15e5ffdf54",
                language: lang
            }
        })
            .then((res) => setMoves(res.data.results))
            .catch((error) => console.log(error))
    }, [lang])

    //to read the single move in anther page
    const navigate = useNavigate();
    const singleMove = ((move) => {
        navigate(`/MovesDetail/${move.id}`, {
            state: {
                move
            }
        })
    })

    //to update value
    const dispatch = useDispatch()

    const favMovie = useSelector((state) => state.favMovie)


    const addToFavarites = ((move) => {

        const isFav = favMovie.find((famov) => famov.id === move.id)

        if (!isFav) {
            dispatch(add({ move }))
        }
    })


    return (
        <>
            <div className="row mx-auto container pt-3">
                {Moves.map((move) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 " key={move.id}>
                            <div className="card bg-dark text-light moves" >
                                <img src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
                                    className="card-img-top" alt="..."
                                    onClick={() => singleMove(move)} />
                                <div className="card-body">
                                    <i className='fa-regular fa-heart mb-2 '
                                        onClick={() => addToFavarites(move)}> </i>
                                    <h5 className="card-title">{move.title}</h5>
                                    <div >
                                        <button style={{ bottom: "10px" }}
                                            className="btn btn-primary w-75"
                                            onClick={() => singleMove(move)}>Know More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}