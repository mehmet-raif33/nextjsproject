import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./reducers/userInfo";

export const maStore = configureStore({
    reducer: {
        userInfo: userInfoSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof maStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof maStore.dispatch