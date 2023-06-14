import { Route, Routes } from "react-router-dom";
import Moves from "../moves/Moves";
import MovesDetail from "../moves/MoveDetail";
import Favarites from "../moves/Favarites";
import Login from "../moves/Login";

export default function Router (){
    return (
        <Routes>
            <Route path="/" element={<Moves />}></Route>
            <Route path="/MovesDetail/:id" element={<MovesDetail />}></Route>
            <Route path="/Favarites" element={<Favarites />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            {/* <Route path="*" element={<Favarites />}></Route> */}{/*for not found */}
        </Routes>
    )
}