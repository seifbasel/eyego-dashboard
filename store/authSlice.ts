import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockLogin, User } from "@/lib/mockAuth";

type AuthState = {
  loggedInUser: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  loggedInUser: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const user = await mockLogin(email, password);

    localStorage.setItem("user", JSON.stringify(user));

    return user;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.loggedInUser = null;
      localStorage.removeItem("user");
    },

    loadUser(state) {
      const saved = localStorage.getItem("user");
      if (saved) {
        state.loggedInUser = JSON.parse(saved);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = action.payload;
      })

      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      });
  },
});

export const { logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
