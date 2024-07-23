import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import ErrorResponse, { handleApiError } from "../utils/errorUtils";
import { URLS } from "../constants/urlConstants";

type LoginRequest = {
    email: string;
    password: string;
};

interface LoginResponse {
    data: string; // The access token
    error: string;
}

interface AuthState {
    status: "idle" | "loading" | "failed";
    access_token: string | null;
    error: string | null;
}

// Initialize state with token from localStorage
const initialState: AuthState = {
    status: "idle",
    access_token: localStorage.getItem("accessToken") || null,
    error: null,
};

export const login = createAsyncThunk<LoginResponse, LoginRequest, { rejectValue: string[] }>(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post<LoginResponse>(URLS.LOGIN, data);
            const { data: token, error } = response.data;

            if (error) {
                console.error('Login error:', error);
                return rejectWithValue([error]);
            }

            localStorage.setItem("accessToken", token); // Store token in localStorage

            return response.data;
        } catch (error) {
            const apiErrors = handleApiError(error as ErrorResponse);
            return rejectWithValue(apiErrors);
        }
    }
);

// Create the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("accessToken"); // Remove token from localStorage
            state.access_token = null;
            state.status = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(
                login.fulfilled,
                (state, action: PayloadAction<LoginResponse>) => {
                    state.status = "idle";
                    state.access_token = action.payload.data;
                    state.error = null;
                }
            )
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                const errors = action.payload as string[];
                state.error = errors[0] || "Login failed";
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
