import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LIGHT_COLORS, DARK_COLORS, LIGHT_FONTS, DARK_FONTS } from 'common';
import { useSelector } from 'react-redux';
import { RootStore } from 'store';

interface ThemeState {
  colors: typeof LIGHT_COLORS,
  fonts: typeof LIGHT_FONTS | typeof DARK_FONTS
}


const initialState: ThemeState = {
  colors: LIGHT_COLORS,
  fonts: LIGHT_FONTS
}


const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    onModeChange(state, isDarkMode: PayloadAction<boolean>) {
      if (isDarkMode) {
        // state.colors = DARK_COLORS;
        // state.fonts = DARK_FONTS;
      } else {
        state.colors = LIGHT_COLORS;
        state.fonts = LIGHT_FONTS;

      }
    }
  }

});

export const { onModeChange } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const useTheme = () => {
  const theme = useSelector((state: RootStore) => state.theme);

  return theme;
}