import { useLocation } from "react-router-dom"

export default function MovesDetail() {
    const location = useLocation()
    const singleMovie = location.state.movie;

    return (
        <div className="bg-light">

            <div className="card mt-1 w-50 mx-auto bg-dark text-light">
                <img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} className="card-img-top" alt="..." style={{ height: "30rem" }} />
                <div className="card-body">
                    <div className="d-flex justify-content-between px-5 fw-bold">
                        <h3 className="card-title fw-bold">{singleMovie.title}</h3>
                        <h3 className="card-title fw-bold">Rate : {singleMovie.vote_average}</h3>
                    </div>
                    <p className="card-text">{singleMovie.overview}</p>
                    <p className="card-text"><small className="">{singleMovie.release_date}</small></p>
                </div>
            </div>

        </div>
    )
}