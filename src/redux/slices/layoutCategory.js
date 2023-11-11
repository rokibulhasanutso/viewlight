import { createSlice } from "@reduxjs/toolkit";
import { defaultLayout } from "../../data/dataStore";

export const layoutCategory = createSlice({
  name: "layoutCategory",

  initialState: {
    fullScreenStatus: false,
    initialValue: defaultLayout,
    layoutValue: defaultLayout,

    viewUrl: "",
    layoutSelected: false,
  },

  reducers: {
    layoutFullScreen: (state, action) => {
      state.fullScreenStatus = action.payload;
      // console.log(action.payload);
    },

    changeCurrentLayout: (state) => {
      state.layoutValue = state.initialValue;
      state.layoutSelected = false;
    },

    changeCategoryLayout: (state, action) => {
      state.initialValue = action.payload;
      state.layoutValue = action.payload;
      state.layoutSelected = false;
    },

    changeSingleLayout: (state, action) => {
      state.layoutValue = state.initialValue.filter(
        (value) => value.name === action.payload
      );
      state.layoutSelected = true;
    },

    setViewUrl: (state, action) => {
      state.viewUrl = action.payload;
        

      console.log(state.viewUrl);
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
