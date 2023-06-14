
export default function ToDoList({ fromList, removeFromList, doneFromList }) {
    //fromList 

    return (<div>

        {
            fromList.map((data) =>
            (
                <div className="border border-primary " key={data.idItem}>
                    <div className="d-flex justify-content-between">
                        <p className={data.done ? "done align-items-center" : "align-items-center"}>{data.item}</p> 
                        <div>
                            <button onClick={() => removeFromList(data.idItem)} className="btn btn-danger mx-5">remove</button>
                            <button onClick={() => doneFromList(data.idItem)} className="btn btn-success">
                                {data.done ? "undo" : "done"}
                            </button>
                        </div>
                    </div>
                </div>
            )
            )
        }
    </div>
    )



}






