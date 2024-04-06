// import { useState } from "react";
import { Link } from "react-router-dom";
// import { logoBar } from '../assets/logo192.png'
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../context/language";


export default function Header() {

    //to change counter value
    // const counter = useSelector((state)=> state.counter.counterValue)
    const {lang , setLange} = useContext(LanguageContext)
    const changeLang = (e) => {
        // console.log(typeof(lang))
        console.log(lang)
        // console.log(typeof(e.target.value))
        console.log(e.target.value)
        setLange(e.target.value)
        console.log(lang)

    }



    const favMovie = useSelector((state) => state.favMovie)
    const counter = favMovie.length
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark position-sticky">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >
                        <img src="" alt="" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Moves</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Favarites">Favarites {counter}</Link>
                            </li>
                        </ul>
                        
                        {/* <Link to="/MovesDetail">MovesDetail</Link> */}
                        <form className="d-flex" role="search">
                            <label className="text-light">movie Language</label>
                            <select className="bg-dark text-light border border-0 me-3 p-2 fw-bold " 
                            value={lang} onChange={changeLang} >
                                <option value="en" >en</option>
                                <option value="fi">fi</option>
                                <option value="de">de</option>
                            </select>
                        <input className="form-control me-2 bg-dark text-light border border-success" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success mx-3" type="submit">Search</button> */}
                            <button className="btn btn-outline-success" type="submit">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </button>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}