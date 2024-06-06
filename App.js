import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ServicesOverviewScreen from './screens/ServicesOverviewScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#B2D8D8' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#F0F8FF' }
          }}
        >
          <Stack.Screen
            name="SpaCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="ServicesOverview"
            component={ServicesOverviewScreen}
            options={{
              title: 'Todas las categorías',
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#B2D8D8' }
            }}
          />
          <Stack.Screen
            name="ServiceDetail"
            component={ServiceDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});