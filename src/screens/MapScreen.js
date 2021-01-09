import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import Maps from "../components/Maps";

const MapScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Maps />
		</SafeAreaView>
	);
}

export default MapScreen;