import { configureStore } from "@reduxjs/toolkit";
import emplloyeSlice from './store'

const store = configureStore({
  reducer: { employ: emplloyeSlice }
})

export default store;