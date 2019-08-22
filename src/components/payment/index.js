import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Payment extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#D3D3D3' }}>
        <View>
          <View style={{ backgroundColor: 'white' }}>
            <View style={[styles.flex_display, styles.content_display, styles.sapce_betwn]}>
              <View>
                <Text style={{ color: 'black', fontSize: 18, padding: 10 }}>Hotel Blue Sky</Text>
                <Text>329 Clemens Vista,Militon Heaven</Text>
                <Text>Montreal, canada</Text>
              </View>
              <View style={[styles.flex_display]}>
                <Text>Detail</Text>
                <Image source={require('../../Images/right_arrow.png')}
                  style={[styles.right_arrow]}
                />
              </View>
            </View>

            <View style={[styles.flex_display, styles.content_display, styles.space_even]}>
              <View>
                <Text style={{ padding: 5 }}>CHEK-IN</Text>
                <Text style={{ color: 'black' }}>01,JUN 2018</Text>
                <Text>12:00 PM</Text>
              </View>
              <View><Text>2 Night</Text></View>
              <View>
                <Text>CHEK-IN</Text>
                <Text style={{ color: 'black' }}>01,JUN 2018</Text>
                <Text>12:00 PM</Text>
              </View>
            </View>

            <View style={[styles.flex_display, styles.sapce_betwn, { padding: 18 }]}>
              <Text style={{ fontSize: 15, color: 'black' }}>King Size Room</Text>
              <View style={[styles.flex_display]}>
                <Text style={{ paddingRight: 10 }}>1 ROOM</Text>
                <Text>2 GUESTS</Text>
              </View>
            </View>

          </View>

          <View style={{ margin: 15 }}><Text style={{ fontSize: 15 }}>Select Payment Type</Text></View>
          <View style={[styles.flex_display, styles.sapce_betwn, styles.payment_type]} >
            <View>
              <Image source={require('../../Images/debit-card.png')}
                style={{ width: 50, height: 50, alignSelf: 'center' }} />
              <Text>Debit Card</Text>
            </View>
            <View>
              <Image source={require('../../Images/debit-card.png')}
                style={{ width: 50, height: 50, alignSelf: 'center', alignSelf: 'center' }} />
              <Text>Creadit Card</Text>
            </View>
            <View>
              <Image source={require('../../Images/net-banking2.png')}
                style={{ width: 50, height: 50 }} />
              <Text>Net Banking</Text>
            </View>
            <View>
              <Image source={require('../../Images/home.png')}
                style={{ width: 50, height: 50, alignSelf: 'center' }} />
              <Text> Pay @Home</Text>
            </View>
          </View>
          <View style={[styles.flex_display, styles.sapce_betwn, { backgroundColor: 'white' }, { padding: 15 }]}>
            <Image
              source={require('../../Images/visa2.png')}
              style={[styles.images]}
            />
            <Image
              source={require('../../Images/rupay.png')}
              style={{ width: 70, height: 50 }}
            />
            <Image
              source={require('../../Images/maestro.png')}
              style={{ width: 80, height: 50 }}
            />
            <Image
              source={require('../../Images/master-card.png')}
              style={{ width: 80, height: 50 }}
            />
          </View>
          <View style={{ width: '100%', backgroundColor: 'white' }}>
            <Text style={{ backgroundColor: 'white', paddingLeft: 10 }}>Your Card Number</Text>
            <TextInput
              style={{
                width: 300,
                height: 35,
                borderBottomColor: '#D3D3D3',
                borderBottomWidth: 1,
                alignSelf: 'center'
              }}
            />
          </View>
          <View style={{ width: '100%', backgroundColor: 'white' }}>
            <Text style={{ backgroundColor: 'white', paddingTop: 5, paddingLeft: 10 }}>Name on the Card</Text>
            <TextInput
              style={{
                width: 300,
                height: 35,
                borderBottomColor: '#D3D3D3',
                borderBottomWidth: 1,
                alignSelf: 'center',
                marginBottom: 10
              }}
            />
          </View>
          <View style={{ padding: 10, backgroundColor: 'white' }}>
            <Button
              title="Pay $457"
              color="#45A7B7"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => this.props.navigation.navigate('hotellist')}
            />
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  flex_display: {
    display: 'flex',
    flexDirection: 'row'
  },
  content_display: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    padding: 15
  },
  space_even: {
    justifyContent: 'space-evenly'
  },
  sapce_betwn: {
    justifyContent: 'space-between',
  },
  right_arrow: {
    width: 18,
    height: 18
  },
  payment_type: {
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1
  },
  images: {
    width: 50,
    height: 50
  }
})
