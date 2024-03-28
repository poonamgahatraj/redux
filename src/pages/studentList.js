import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents, selectAllStudents } from './studentSlice';




export default function StudentList(){

    const StudentList = () => {
        const dispatch = useDispatch();
        const students = useSelector(selectAllStudents);
      
        useEffect(() => {
          dispatch(fetchStudents());
        }, [dispatch]);
    
    return(
        <>
         <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.id} - {student.address}
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}
}