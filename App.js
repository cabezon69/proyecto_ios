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
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#CC3737',
            contentStyle: { backgroundColor: '#CC3737' }
          }}
        >
          <Stack.Screen
            name="catalogo de autos"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="ServicesOverview"
            component={ServicesOverviewScreen}
            options={{
              title: 'Todas las categorías',
              headerTintColor: '#CC3737',
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