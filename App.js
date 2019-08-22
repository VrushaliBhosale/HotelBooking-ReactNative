
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Start from './src/components/getstart/index.js';
import PhoneVerification from './src/components/phone-verification/index';
import Home from './src/components/homepage/index';
import HotelList from './src/components/hotel-list/index';
import HotelDetails from './src/components/hotel-details/index';
import Filter from './src/components/filter/index';
import Payment from './src/components/payment/index';

class App extends Component {
  render() {
    return (
      <AppContainer />
      // <View>
      //   <>
      //   <View>
      //     {/* <Start /> */}
      //     {/* <PhoneVerification /> */}
      //     {/* <Home /> */}
      //     {/* <HotelList /> */}
      //     {/* <HotelDetails /> */}
      //     <Filter />
      //   </View>

      // </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  start: {
    screen: Start,
    navigationOptions: { header: null }
  },
  phoneVerification: {
    screen: PhoneVerification,
    navigationOptions: { header: null }
  },
  homepage: {
    screen: Home,
    navigationOptions: { header: null }
  },
  hotellist: {
    screen: HotelList,
    navigationOptions: { header: null }
  },
  filter: {
    screen: Filter,
    navigationOptions: { header: null }
  },
  hoteldetails: {
    screen: HotelDetails,
    navigationOptions: { header: null }
  },
  payment: {
    screen: Payment,
    navigationOptions: { header: null }
  }
},
  {
    initialRouteName: 'start'
  });

const AppContainer = createAppContainer(AppNavigator);
export default App;

