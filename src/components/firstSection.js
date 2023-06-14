import { useState } from "react"
import Pargraph from "./pargraphs"

const Firstsection = () => {



    const [twoInfo, setTwoInfo] = useState([
        {
            p: 'University Of Msh Faker',
            span: 'Student',
            h5: "Certificate Of Web Training",
            bigP: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquid tempore quaerat alias. Tenetur voluptatum perspiciatis",
            id: 1
        },
        {
            p: 'University Of Msh Faker',
            span: 'Student',
            h5: "Certificate Of Web Training",
            bigP: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquid tempore quaerat alias. Tenetur voluptatum perspiciatis",
            id: 2
        }
    ])

    return (
        <>
            <h1 className="text-center">Education</h1>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquid tempore quaerat alias. Tenetur voluptatum perspiciatis</p>
            <div className="p-3 bg-dark">
                <h3 className="text-center mb-5">More Info</h3>
                <div className="row">
                    {
                        twoInfo.map((info) => {
                            return (<>
                                <Pargraph key={info.id} infos={info} />
                                <hr/>
                            </>)
                        })
                    }
                </div >
            </div>
        </>
    )
}
export default Firstsection