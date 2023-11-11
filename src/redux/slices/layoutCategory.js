import { createSlice } from "@reduxjs/toolkit";
import { defaultLayout } from "../../data/dataStore";

export const layoutCategory = createSlice({
  name: "layoutCategory",

  initialState: {
    fullScreenStatus: false,
    initialValue: defaultLayout,
    layoutValue: defaultLayout,

    viewUrl: ''
  },

  reducers: {
    layoutFullScreen: (state, action) => {
      state.fullScreenStatus = action.payload;
      // console.log(action.payload);
    },

    changeCurrentLayout: (state) => {
      state.layoutValue = state.initialValue;
    },

    changeCategoryLayout: (state, action) => {
      state.initialValue = action.payload;
      state.layoutValue = action.payload;
    },

    changeSingleLayout: (state, action) => {
      state.layoutValue = state.initialValue.filter(
        (value) => value.name === action.payload
      );
    },

    setViewUrl: (state, action) => {
      state.viewUrl = action.payload;
    },
  },
});

export const {
  changeCategoryLayout,
  changeSingleLayout,
  changeCurrentLayout,
  layoutFullScreen,
  setViewUrl,

} = layoutCategory.actions;

export default layoutCategory.reducer;
