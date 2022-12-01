import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";

// const store = configureStore({
//   user: userReducer,
// });

// export default store

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

export default store;
