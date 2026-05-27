import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store"; // 引入我们刚才定义的 RootState

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleValue } = toggleSlice.actions;

// 使用 RootState 代替 any，实现类型自动补全
export const selectToggleValue = (state: RootState) => state.toggle.value;

export default toggleSlice.reducer;
