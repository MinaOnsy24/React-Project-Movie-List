import Myphoto from'../assets/IMG-20191015-WA0000.jpg'

const Sidebar = () => {
    return(
        <div >
            <div className="col-6 text-center">
                <img className='w-100 rounded-circle' style={{height:"120px"}} src={Myphoto}  alt=''/>
            </div>


        </div>
    )
}
export default Sidebar;