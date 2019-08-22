import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';

export default class PhoneVerification extends PureComponent {
  render() {
    return (
      <ImageBackground
        source={require('../../Images/destination4.jpeg')}
        style={styles.wrapperImage}
      >
        <View style={[styles.wrapper]} >
          <View style={[styles.heading]}>
            <Text style={[styles.heading_size]}>Phone verification</Text>
            <Text style={{ color: 'white' }}>Please enter your mobile phone number</Text>
          </View>
          <View style={{
            marginLeft: 40,
          }}>
            <TextInput
              style={{
                width: 300,
                height: 35,
                borderColor: '#C8C8C8',
                borderWidth: 1,
                backgroundColor: 'white',
                marginBottom: 20,
                opacity: 0.8
              }}
            />
            <View style={[styles.pin_generate_view]}>
              <TextInput
                style={{
                  width: 190,
                  height: 35,
                  borderColor: 'white',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  marginRight: 10
                }}
              />
              <View style={[styles.resend_btn]}>
                <Button
                  title="Resend"
                  color="red"
                />
              </View>
            </View>
            <Text style={{ color: 'white' }}>We will try to autoverify.</Text>
            <View style={styles.continue_btn}>
              <Button
                title="Continue"
                color="red"
                style={{
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate('homepage')}
              />
            </View>
            <Text style={{ color: 'white' }}>By clicking continue , you agree to our </Text><Text style={{ color: 'red' }}>Terms and Conditions</Text>
          </View>
        </ View>
      </ImageBackground >
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 80,
    paddingBottom: 30,
    marginLeft: 40,
  },
  heading_size: {
    fontSize: 20,
    color: 'white'
  },
  pin_generate_view: {
    marginRight: 51,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  resend_btn: {
    width: 100,
    height: 40
  },
  continue_btn: {
    width: 300,
    marginTop: 100,
  },
  wrapperImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
