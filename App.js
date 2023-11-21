import React from 'react';
// import { Provider } from "react-redux";
// import ReduxThunk from "redux-thunk";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import productReducer from "./store/reducers/products";
// import cartReducer from "./store/reducers/cart";
// import ordersReducer from "./store/reducers/orders";
// import authReducer from "./store/reducers/auth";
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  

const Stack = createNativeStackNavigator();
// const rootReducer = combineReducers({
//   products: productReducer,
//   cart: cartReducer,
//   orders: ordersReducer,
//   auth: authReducer
// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

