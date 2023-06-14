// import axios from "axios"
// import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"


export default function MovesDetail() {
    // const [MovesDetail, setMovesDetail] = useState([])

    const params = useParams();
    const location = useLocation()
    // console.log(params)
    // console.log(location)
    // console.log(location.state.move)

    const singleMove = location.state.move ; 
    // console.log(singleMove)

    // useEffect(() => {
    //     axios.get(`https://api.noroff.dev/api/v1/gamehub${params.id}`)
    //         .then((res) => console.log(res.data)) 
    //         .catch((error) => console.log(error))
    // })

    return (
        <div className="bg-light">

            <div className="card mt-1 w-50 mx-auto bg-dark text-light">
                <img src={`https://image.tmdb.org/t/p/w500${singleMove.poster_path}`} className="card-img-top" alt="..." style={{height:"30rem"}}/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between px-5 fw-bold">
                            <h3 className="card-title fw-bold">{singleMove.title}</h3>
                            <h3 className="card-title fw-bold">Rate : {singleMove.vote_average}</h3>
                        </div>
                        <p className="card-text">{singleMove.overview}</p>
                        <p className="card-text"><small className="">{singleMove.release_date}</small></p>
                    </div>
            </div>

        </div>
    )
}