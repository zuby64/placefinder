

//note:The provided link to fetch data was not working also no map api key was provided ,
// We are having a mapScreen which will show user it's current location ,as user searches the through the textinput
//  I have designed it to make api call and get new location based on it and will show it
//Also the map will show previous searches to the user on the map
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import MapScreen from './src/screens/MapScreen';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen name="MapScreen" component={MapScreen} />
          </Stack.Navigator>
          <FlashMessage position="top" />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
