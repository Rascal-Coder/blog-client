import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProject: 'Blog'
}

type PayloadType = {
  currentProject: string
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    onProjectSwitch(state, action: PayloadAction<PayloadType['currentProject']>) {
      state.currentProject = action.payload
      return state
    }
  }
})

export const { onProjectSwitch } = projectSlice.actions

export default projectSlice.reducer
