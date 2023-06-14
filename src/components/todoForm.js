import {  useState } from "react"

export default function ToDoForm({getDataFromChild}) {
    const [itemsList, setItemsList] = useState("")

    const handelClick = () => {

        //to send to parent
        getDataFromChild(itemsList);
    
        //to rest input
        setItemsList("")
    }

    return (
        <div className="border bg-primary text-light px-5 pt-5">
            <h1 className="text-end">To-Do Form</h1>
            <p className="text-end">Add New To-Do</p>

            <input type="text" value={itemsList} onChange={(e)=>setItemsList(e.target.value)} className="col-12" id="addText" />
            <br />
            <button onClick={handelClick} className="text-end my-4 btn btn-primary border">Add item</button>

        </div>
    )
}












    // const [addItem, setAddItem] = useState('')
    // ()=> getDataFromChild(itemsList)


    // const changeItem = (e) => {
    //     setAddItem(e.target.value)
        
    // }

    // useEffect(()=>{
    //     setItemsList({item:addItem})
    //     // console.log(itemsList)
    // },[itemsList]) 


    // const addItemInArray = () => {
    //     itemsList.push({item:addItem})
    // }
    // itemsList.push({item:addItem})
    // setItemsList({item:addItem})
    // props.onUpdate(itemsList)
