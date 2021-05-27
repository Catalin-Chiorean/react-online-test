import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    level: "easy",
  },
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLevel } = quizSlice.actions;

export const quizSelector = (state) => state.quiz;