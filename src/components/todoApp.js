import { useState } from "react";
import ToDoForm from "./todoForm";
import ToDoList from "./todoList";

export default function ToDoApp() {
    const [listData, setListData] = useState([])
    // console.log(typeof (listData))

    //to add id 
    const [id, setId] = useState(0)

    // received from child form
    const getDataFromParnt = (formData) => {
        setId(id + 1)
        const tolist = {
            idItem: id,
            item: formData,
            done: false
        }
        //to update value
        setListData([...listData, tolist])//هات array القديمة +الجديدة 
    }

    const removeFromparent = (itemID) => {
        const afterRemove = listData.filter((data) => data.idItem !== itemID)
        setListData(afterRemove)//غير ال array ب arrray تانية 
    }
    //map بترجع array //Etch
    const doneFromparent = (itemid) => {
        const afterDone = listData.map((index) => {
            //anther way
            if (index.idItem === itemid) {//غير اللى قابله بس 
                return { item : index.item , idItem : index.idItem , done : !index.done }
            }

            //anther way 
            // if (index.idItem === itemid) {//غير اللى قابله بس 
            //     index.done = !index.done
            //     return index
            // }
            return index//رجع باقى اللى فى ال array
        })
        setListData(afterDone)//غير ال array ب arrray تانية 
    }
    return (
        <>
            <div className="container">

                <ToDoForm getDataFromChild={getDataFromParnt} />
                <div className="border border-primary border-2 px-5 pt-5 mt-5 ">
                    <p className="text-center fs-5">Let's get some work done !</p>
                    <ToDoList fromList={listData} removeFromList={removeFromparent} doneFromList={doneFromparent} />
                </div >
            </div>
        </>
    )
}
