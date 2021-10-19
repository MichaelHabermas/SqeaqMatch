import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import LevelCard from "./LevelCard";

const level_cards = [
	{ number: 1, unlocked: true, completed: false },
	{ number: 2, unlocked: true, completed: false },
	{ number: 3, unlocked: true, completed: false },
	{ number: 4, unlocked: true, completed: false },
	{ number: 5, unlocked: true, completed: false },
	{ number: 6, unlocked: true, completed: false },
	{ number: 7, unlocked: true, completed: false },
	{ number: 8, unlocked: true, completed: false },
	{ number: 9, unlocked: true, completed: false },
	{ number: 10, unlocked: true, completed: false },
	{ number: 11, unlocked: true, completed: false },
	{ number: 12, unlocked: true, completed: false },
	{ number: 13, unlocked: true, completed: false },
	{ number: 14, unlocked: true, completed: false },
	{ number: 15, unlocked: true, completed: false },
	{ number: 16, unlocked: true, completed: false },
	{ number: 17, unlocked: true, completed: false },
	{ number: 18, unlocked: true, completed: false },
	{ number: 19, unlocked: true, completed: false },
	{ number: 20, unlocked: true, completed: false },
];

function LevelSelectionContainer(props) {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.subContainer}>
					{level_cards.map((level_card, index) => (
						<LevelCard
							key={index}
							onPress={() => console.log(`Card ${level_card.number} pressed`)}
							number={level_card.number}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		height: "100%",
		flex: 1,
	},
	container: {
		alignSelf: "center",
		height: "70%",
		justifyContent: "space-between",
		width: "80%",
		position: "absolute",
		bottom: 0,
	},
	subContainer: {
		alignSelf: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		height: "100%",
		justifyContent: "space-between",
		width: "100%",
	},
});

export default LevelSelectionContainer;