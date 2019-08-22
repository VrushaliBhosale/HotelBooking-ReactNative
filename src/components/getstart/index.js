import React, { PureComponent } from 'react';
import { Text, View, Button, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';

export default class Start extends PureComponent {
  render() {
    return (
      <ImageBackground
        source={require('../../Images/destination4.jpeg')}
        style={[styles.backgroundImage]}
      >
        <View>
          <View style={[styles.image]}>
          </View>

          <View style={{
            position: 'absolute',
            top: 50,
            left: 100,
          }}>
            <View style={styles.cirlular_text}>
              <View><Text style={[styles.white_clr, styles.size]}>Hotel</Text></View>
              <View style={{
                marginLeft: 3,
                width: 50,
                height: 50,
                alignItems: "center",
                paddingTop: 13,
                borderRadius: 30,
                backgroundColor: 'red'
              }}><Text style={[styles.white_clr, styles.size]}>Up</Text></View>
            </View>
            <Text style={styles.white_clr}>Best Budget Hotels</Text>
          </View>
          <View style={styles.get_started_btn}>
            <Button
              title="Get Started"
              color="red"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => this.props.navigation.navigate('phoneVerification')}
            />
          </View>
        </View >
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  cirlular_text: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
  },
  get_started_btn: {
    position: 'absolute',
    width: 250,
    bottom: 50,
    left: 70,
  },
  size: {
    fontSize: 18
  },
  white_clr: {
    color: 'white',
    fontSize: 15
  },
  backgroundImage: {
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
  }
});
