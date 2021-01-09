import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const height = Dimensions.get('window').height;

const Maps = () => {
	return (
		<MapView
			style={styles.map}
			loadingEnabled={true}
			region={{
				latitude: 18.557733,
				longitude: 73.796122,
				latitudeDelta: 0.015,
				longitudeDelta: 0.0121
			}}
		>
			<Marker 
				coordinate = {{
					latitude: 18.557733,
					longitude: 73.796122
				}}
				title={"My Location"}
				description={"Home"}
			/>
			<Marker 
				coordinate = {{
					latitude: 18.556433,
					longitude: 73.794750
				}}
				title={"Domino's Pizza"}
			/>
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		height
	}
})

export default Maps;