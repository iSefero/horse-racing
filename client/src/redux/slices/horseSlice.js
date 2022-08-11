import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	round: [
		{
			name: '',
			ratio: 0,
			distance: 0,
		},
	],
};

const horseSlice = createSlice({
	name: 'horses',
	initialState,
	reducers: {
		setHorses(state, action) {
			state.round = action.payload;
		},
	},
});

export const { setHorses } = horseSlice.actions;

export default horseSlice.reducer;
