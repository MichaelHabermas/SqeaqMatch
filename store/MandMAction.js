export const SET_PROFILE = "SET_PROFILE";
export const RESET_PROFILE = "RESET_PROFILE";
export const SET_CURRENT_GAME = "SET_CURRENT_GAME";
export const SET_PROGRESS = "SET_PROGRESS";

export const setProfile = profile => {
	return { type: SET_PROFILE, payload: profile };
};

export const resetProfile = () => {
	return { type: RESET_PROFILE };
};

export const setCurrentGame = currentGameSettings => {
	return { type: SET_CURRENT_GAME, payload: currentGameSettings };
};

export const setProgress = updatedProgress => {
	return { type: SET_PROGRESS, payload: updatedProgress };
};