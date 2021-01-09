import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MapsScreen from './src/screens/MapScreen';
import MapsListScreen from './src/screens/MapsListScreen';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="MapView" component={MapsScreen} />
				<Tab.Screen name="MapsList" component={MapsListScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
