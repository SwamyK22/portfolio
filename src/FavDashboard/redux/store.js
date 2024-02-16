import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "dashbordData",
    initialState: { data: [], favData: [] },
    reducers: {
        addAllData: (state, action) => ({ ...state, data: action.payload }),
        addFavData: (state, action) => ({ ...state, favData: [...state.favData, action.payload] }),
        removeFav: (state, action) => {
            const index = state.favData.findIndex(x => x === action.payload)
            return {
                ...state,
                favData: [...state.favData.slice(0, index), ...state.favData.slice(index + 1)]
            }
        }
    }
});

export const store = configureStore({ reducer: dataSlice.reducer })
export const { addAllData, addFavData, removeFav } = dataSlice.actions;