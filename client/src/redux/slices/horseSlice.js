import { createSlice } from '@reduxjs/toolkit';

const initalState = {
	name: '',
	ratio: 0,
	distance: 0,
};

const horseSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setHorses(state, action) {
			state.name = action.payload.name;
			state.ratio = Number(action.payload.ratio);
			state.distance = Number(action.payload.distance);
		},
	},
});

export const { setHorses } = horseSlice.actions;

export default horseSlice.reducer;
