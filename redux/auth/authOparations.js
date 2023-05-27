import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { app, auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authLoginUser = () => async (dispatch, getState) => {};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      thunkAPI.dispatch(
        authSlice.actions.updateUserProfile({
          login: user.displayName || user.email.split("@")[0],
          email: user.email,
          userId: user.uid,
        })
      );
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ login, email, password }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;
      await user.updateProfile({
        displayName: login,
      });
      const { displayName, uid } = await auth.currentUser;

      const userUpdateProfile = {
        login: displayName,
        userId: uid,
      };
      console.log("userUpdateProfile", userUpdateProfile);
      thunkAPI.dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));

      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  try {
    await signOut(auth);
    thunkAPI.dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    console.log("error", error);
    thunkAPI.rejectWithValue(error.message);
  }
});

export const authStateChangeUserThunk = createAsyncThunk(
  "auth/change",
  async () => {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          const userUpdateProfile = {
            login: displayName,
            userId: uid,
          };

          thunkAPI.dispatch(
            authSlice.actions.updateUserProfile(userUpdateProfile)
          );
          thunkAPI.dispatch(
            authSlice.actions.authStateChange({ stateChange: true })
          );
        }
      });
    } catch {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
