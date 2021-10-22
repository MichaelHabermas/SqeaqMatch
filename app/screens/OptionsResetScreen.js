import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import defaultStyles from "../config/styles";
import OptionsButton from "../components/OptionsButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import Text from "../components/Text";

function OptionsScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.goBack()}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={false}
				title="Options"
				titleOffset={80}
			/>
			<Text style={styles.message}>Reset Profile and Progress?</Text>
			<Text fontFam="alfa" style={styles.subMessage}>
				WARNING: This will reset all progress and achievements, and cannot be
				undone.
			</Text>
			<OptionsButton
				onPress={() => console.log("TODO: dispatch a reset to state")}
				name="RESET"
				style={styles.buttonText}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonText: {
		alignItems: "center",
		color: defaultStyles.colors.light_blue,
		fontSize: 30,
		justifyContent: "center",
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
	view: {
		alignItems: "center",
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 50,
		justifyContent: "center",
		height: 60,
		width: 160,
	},
	message: {
		color: defaultStyles.colors.white,
		fontSize: 50,
		lineHeight: 60,
		marginTop: 30,
		marginBottom: 20,
		paddingTop: 20,
		textAlign: "center",
		width: "90%",
	},
	screen: {
		alignItems: "center",
		width: "100%",
	},
	subMessage: {
		color: "#F3FF6C",
		fontSize: 19,
		marginBottom: 70,
		textAlign: "center",
		width: "90%",
	},
});

export default OptionsScreen;
