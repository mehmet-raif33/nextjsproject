import { createSlice } from "@reduxjs/toolkit";

interface UserInfoState {
    user: string;
}

const initialState: UserInfoState = {
    user: 'Mehmet Raif'
}
const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;