import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './UserSlice';
import { quizSlice } from './QuizSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    quiz: quizSlice.reducer
  },
});