import { createSlice } from '@reduxjs/toolkit';

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tagsList: [{ tagName: "", fullName: "" }],
  },
  reducers: {
    setTagsList: (state, action) => {
      const newList = [...state.tagsList, { tagName: action.payload.tagName, fullName: action.payload.fullName }]
      state.tagsList = newList
    }
  },
});

export const { setTagsList } = tagsSlice.actions;

export const selectTagsList = state => state.tags.tagsList;

export default tagsSlice.reducer;
