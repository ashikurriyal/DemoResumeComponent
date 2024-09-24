import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: {
    salesRep: "Enter key responsibilities and accomplishments.",
    salesAssociate: "Show that you create value with your work by listing your responsibilities.",
  },
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    editSection: (state, action) => {
      const { sectionName, content } = action.payload;
      state.sections[sectionName] = content;
    },
  },
});

export const { editSection } = resumeSlice.actions;

export default resumeSlice.reducer;
