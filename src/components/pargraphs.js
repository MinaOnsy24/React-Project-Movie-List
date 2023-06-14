export default function Pargraph({ infos }) {
    // console.log(infos)
        
    return (
        <>
            <div className="col-4" >
                <p className="text-bold fs-4">{infos.p}</p>
                <span className="fs-5">{infos.span}</span>
                <button className="btn btn-warning ms-5">Hamada</button>
            </div>
            <div className="col-8">
                <h5>{infos.h5}</h5>
                <p>{infos.bigP}</p>
            </div>
        </>
    )
} 