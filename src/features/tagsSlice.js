import { createSlice } from '@reduxjs/toolkit';

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tagsList: [],
  },
  reducers: {
    setTagsList: (state, action) => {
      const newList = state.tagsList
      newList.splice(0, 0, action.payload)
      state.tagsList = newList
    }
  },
});

export const { setTagsList } = tagsSlice.actions;

export const selectTagsList = state => state.tags.tagsList;

export default tagsSlice.reducer;
