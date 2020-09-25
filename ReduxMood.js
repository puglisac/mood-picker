const INITIAL_STATE = { mood: null };

function moodReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "HAPPY":
			return { ...state, mood: "😸" };

		case "SAD":
			return { ...state, mood: "😿" };

		case "ANGRY":
			return { ...state, mood: "😾" };

		case "MISCHIEVOUS":
			return { ...state, mood: "😼" };

		default:
			return state;
	}
}

const store = Redux.createStore(moodReducer);
