import { configureStore } from "@reduxjs/toolkit";
import { layoutCategory } from "./slices/layoutCategory";

export default configureStore({
    reducer: {
        layoutCategory: layoutCategory.reducer,
    },
})