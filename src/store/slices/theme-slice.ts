import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type themeType = "dark" | "light";

export interface IThemeSliceDataState {
  theme: themeType;
}

const initialState: IThemeSliceDataState = {
  theme: "light",
};

export const themeDataSlice = createSlice({
  name: "themeData",
  initialState: {
    themeData: initialState,
  },
  reducers: {
    toggleTheme: (state, action: PayloadAction<themeType>) => {
      state.themeData.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeDataSlice.actions;

export default themeDataSlice.reducer;
