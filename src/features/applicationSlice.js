import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../serverUrl";

export const authSignIn = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      localStorage.setItem("token", json.username);
      return json;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk("logout", (_, thunkAPI) => {
  localStorage.removeItem("token");
});

export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    error: null,
    isLoading: false,
    token: localStorage.getItem("token"),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.username;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      });
  },
});
export default applicationSlice.reducer;
