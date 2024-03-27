import { Link } from "react-router-dom";

export default function Homepage (){
    return(
        <>
         <button> <Link to="/Form"> Form</Link></button>
        <button><Link to="/">Student Detail</Link></button>
        <button><Link to="/Addstudent">Add Student</Link></button>
        <button>Delete Student</button>

        </>
       
    )
}