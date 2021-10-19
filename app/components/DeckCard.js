import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

import defaultStyles from "../config/styles";

function DeckCard({ name, onPress, style, fontFam }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, style]}>
				<Text fontFam={fontFam} style={styles.text}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 15,
		height: 70,
		justifyContent: "center",
		marginBottom: 10,
		width: "100%",
	},
	text: {
		color: defaultStyles.colors.light_blue,
		fontSize: 30,
		paddingHorizontal: 10,
		textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
});

export default DeckCard;
