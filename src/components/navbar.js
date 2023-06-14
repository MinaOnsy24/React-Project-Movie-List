import Myphoto from'../assets/IMG-20191015-WA0000.jpg'
const Navbar = () =>{
    return(
        <div>
        <div className="row bg-dark">
            <div className="p-3 col-6">
                <h1 >Iam Mina Onsy <br/><span className="text-warning">Front-End</span> Devoloper</h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquid tempore quaerat alias. Tenetur voluptatum perspiciatis, consectetur autem natus, esse molestiae consequatur sunt, recusandae dolorum neque repellat? Omnis, veniam adipisci.</p>
                <button className='btn btn-warning'>HIRE ME</button>
            </div>
            <div className="col-6 px-5 ">
                <img className='w-100 rounded-5' src={Myphoto} style={{height:"500px"}} alt=''/>
            </div>
        </div>
        </div>
    )
}
export default Navbar