import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    initialValues : {
        title: '',
        body: ''
    }
}

const apiCallSlice = createSlice({
    name: 'apiCallSlice',
    initialState,
    reducers: {
        addSinglePost(state, action){
            state.initialValues = action.payload
        }
    }
})

export const { addSinglePost } = apiCallSlice.actions
export default apiCallSlice.reducer