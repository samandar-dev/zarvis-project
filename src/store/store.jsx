import { createSlice } from "@reduxjs/toolkit";
import object from '../Object/Object'

const emplloyeSlice = createSlice({
  name: 'employ',
  initialState: {
    object,
    count: 0,
  },
  reducers: {
    edit(state, action) {
      state.object.map(item => {
        if (item.id == action.payload.id) {
          item.count += 1
        }
      })
    },
    deleteItem: (state, action) => {
      let arr = state.object.filter(item => item.id !== action.payload.id)
      state.object = []
      arr.forEach(item => state.object.push(item))
    },
    countChange: (state, action) => {
      state.count += action.payload.num
    },
  },
});

export const emplloyActions = emplloyeSlice.actions;
export default emplloyeSlice.reducer;
