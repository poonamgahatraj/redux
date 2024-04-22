import { useDispatch,useSelector } from 'react-redux';


import { fetchStudentList } from './slice/studentListslice';
import './App.css';

function App() {
  const state=useSelector((state)=>state);
  console.log("state", state);
  const dispatch=useDispatch();

  return (
    <div className='App'>
      <button onClick={(e)=>dispatch(fetchStudentList())}>Student List</button>

      {
        state.studentList.data && state.studentList.data.map((item)=>{
          return(
            <li>{item.name}</li>
          )
        })
      }

    </div>
    
   
   
  );
}

export default App;
