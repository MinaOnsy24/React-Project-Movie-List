import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { remove } from "../Store/slices/favMovie";


export default function Favarites() {

    const favMovie = useSelector((state) => state.favMovie)
    const allFavMovie = favMovie.map((singlemovie) => singlemovie.move)
    // console.log(allFavMovie)

    //to read the single move in anther page
    const navigate = useNavigate();
    const singleMovie = ((move) => {
        navigate(`/MovesDetail/${move.id}`, {
            state: {
                move
            }
        })
    })

    const dispatch = useDispatch()
    const removeToFavarites = ((move) => {
        // console.log(move)
        dispatch(remove({ move }))
    })


    return (
        <div className="bg-light">
            <div className="row mx-auto container pt-3 bg-light my-3">
                {allFavMovie.map((movie) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 " key={movie.id}>
                            <div className="card bg-dark text-light" >
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <i className='fa-regular fa-heart mb-2 text-danger'
                                        onClick={() => removeToFavarites(movie)}> </i>
                                    <h5 className="card-title">{movie.title}</h5>
                                    <div >
                                        <button style={{ bottom: "10px" }}
                                            className="btn btn-primary w-75"
                                            onClick={() => singleMovie(movie)}>Know More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}