import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/getAll');
      const data = await response.json();
      return data;
    }
  );

  const studentSlice = createSlice({
    name: 'students',
    initialState: {
      students: [],
      status: 'idle',
      error: null,
    },

    reducers: {},
    extraReducers: {
      [fetchStudents.pending]: (state) => {
        state.status = 'loading';
      },
      [fetchStudents.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      },
      [fetchStudents.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  });

  export default studentSlice.reducer;
export const selectAllStudents = (state) => state.students.students;