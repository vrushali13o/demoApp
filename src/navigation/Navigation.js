import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../modules/firstScreen/FirstScreen';
import SecondScreen from '../modules/secondScreen/SecondScreen';
import ThirdScreen from '../modules/thirdScreen/ThirdScreen';
import {Text, View} from 'react-native';
import {withTheme} from 'react-native-elements';

const Stack = createStackNavigator();

const Navigation = ({theme}) => {
  const {colors} = theme;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Navigation);
