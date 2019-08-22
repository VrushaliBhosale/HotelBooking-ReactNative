import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ProgressBarAndroid, TouchableOpacity } from 'react-native';
import { Card, Button } from 'native-base';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      cancellation: false,
      delayedpay: false,
      sunriseCheck: false
    }
  }

  cancelBooking = () => {
    this.setState({ cancellation: !this.state.cancellation });
  }

  delayedPay = () => {
    this.setState({ delayedpay: !this.state.delayedpay });
  }

  sunriseChecking = () => {
    this.setState({ sunriseCheck: !this.state.sunriseCheck });
  }
  render() {
    return (
      <View style={{ backgroundColor: '#D3D3D3' }}>
        <Card style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            width: '30%',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <Image
                source={require('../../Images/back-arrow-icon.png')}
                style={[styles.back_arrow]}
              />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('hotellist')}>
              <Image
                source={require('../../Images/back-arrow-icon.png')}
                style={[styles.back_arrow]}
              />
            </TouchableOpacity>
            <Text>Filter</Text>
          </View>
          <Text>RESET</Text>
        </Card>

        <Card>
          <Text style={{ paddingLeft: 5, paddingTop: 5 }}>PRICE RANGE</Text>
          <Text style={{ alignSelf: 'center', padding: 5, color: 'black' }}>$0 to $1500++</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={1}
            style={{ width: 200, alignSelf: 'center', height: 50, color: '#0080ff' }}
          />
        </Card>

        <Card>
          <Text style={{ paddingLeft: 5, paddingTop: 5 }}>HOTEL START</Text>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 18,
            justifyContent: 'space-between'
          }}>
            <Card style={[styles.rating_card]}>
              <Image source={require('../../Images/star.png')}
                style={[styles.star]}
              />
              <Text style={{ alignSelf: 'center' }}>1</Text>
            </Card>
            <Card style={[styles.rating_card]}>
              <Image source={require('../../Images/star.png')}
                style={[styles.star]}
              />
              <Text style={{ alignSelf: 'center' }}>2</Text>
            </Card>
            <Card style={[styles.rating_card]}>
              <Image source={require('../../Images/star.png')}
                style={[styles.star]}
              />
              <Text style={{ alignSelf: 'center' }}>3</Text>
            </Card>
            <Card style={[styles.rating_card]}>
              <Image source={require('../../Images/star.png')}
                style={[styles.star]}
              />
              <Text style={{ alignSelf: 'center' }}>4</Text>
            </Card>
            <Card style={[styles.rating_card, { backgroundColor: '#0080ff' }]}>
              <Image source={require('../../Images/star.png')}
                style={[styles.star]}
              />
              <Text style={{ color: 'white', alignSelf: 'center' }}>5</Text>
            </Card>
          </View>
        </Card>

        <Card>
          <View style={[styles.flex_display, styles.cancellation, styles.horizontal_line]}>
            <Text style={[styles.black_clr]}>Free Cancellation</Text>
            {this.state.cancellation ?
              <TouchableOpacity onPress={this.cancelBooking}>
                <Image source={require('../../Images/filled-radio-btn.png')}
                  style={{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={this.cancelBooking}>
                <Image source={require('../../Images/radio-btn.png')}
                  style={{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
            }
          </View>
          <View style={[styles.flex_display, styles.cancellation]}>
            <Text style={[styles.black_clr]}>Reserve now pay later</Text>
            {this.state.delayedpay ?
              <TouchableOpacity onPress={this.delayedPay}>
                <Image source={require('../../Images/filled-radio-btn.png')}
                  style={{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={this.delayedPay}>
                <Image source={require('../../Images/radio-btn.png')}
                  style={{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
            }
          </View>
        </Card>

        <Card style={[styles.flex_display, styles.cancellation]}>
          <Text style={[styles.black_clr]}>Sunrise Check-in</Text>
          {this.state.sunriseCheck ?
            <TouchableOpacity onPress={this.sunriseChecking}>
              <Image source={require('../../Images/filled-radio-btn.png')}
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this.sunriseChecking}>
              <Image source={require('../../Images/radio-btn.png')}
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          }
        </Card>

        <Card style={[styles.flex_display, styles.cancellation, styles.flex_alignment]}>
          <View>
            <Text style={[styles.black_clr]}>Other facilities</Text>
            <Text>Parking, Pool, Bar + 1 more</Text>
          </View>
          <Image
            source={require('../../Images/right_arrow.png')}
            style={[styles.right_arrow]}
          />
        </Card>
        <Button primary style={[styles.apply_btn]} onPress={() => this.props.navigation.navigate('hoteldetails')}><Text style={{ color: 'white', width: '100%', textAlign: 'center' }}> APPLY </Text></Button>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  back_arrow: {
    width: 30,
    height: 30
  },
  right_arrow: {
    width: 20,
    height: 20,
    marginLeft: 1,
  },
  star: {
    width: 35,
    height: 30,
    marginLeft: 1,
  },
  rating_card: {
    width: '18%',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-evenly',
  },
  flex_display: {
    display: 'flex',
    flexDirection: 'row'
  },
  cancellation: {
    justifyContent: 'space-between',
    padding: 18
  },
  horizontal_line: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1
  },
  flex_alignment: {
    alignItems: 'center'
  },
  black_clr: {
    color: 'black',
    fontSize: 16
  },
  apply_btn: {
    marginTop: 120,
    height: 50
  }
})
