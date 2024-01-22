import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true,
  g: true,
  h: true,
  i: true,
  selected: "",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setVisibility: (state, action) => {
      const { gridArea, visible } = action.payload;
      if (gridArea === state.selected) {
        Object.keys(state).forEach((key) => {
          state[key] = true;
        });
        state.selected = "";
      } else {
        if (state.hasOwnProperty(gridArea)) {
          Object.keys(state).forEach((key) => {
            if (state[key] !== gridArea) {
              state[key] = key === gridArea ? visible : false;
              state.selected = gridArea;
            }
          });
        }
      }
    },
  },
});

export const { setVisibility } = layoutSlice.actions;
export default layoutSlice.reducer;
