import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ProgressBarAndroid } from 'react-native';
import { Card, Button } from 'native-base';

export default class HotelDetails extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#D3D3D3' }}>
        <View>
          <Image
            source={require('../../Images/destination1.jpeg')}
            style={[styles.home_image]}
          />

          <Card style={[styles.header]}>
            <View style={[styles.header_title]}>
              <Text style={[styles.header_title_hotel_name]}>Hotel Blue Sky</Text>
              <Text>5th street, Militon Heaven</Text>
              <Text>Montreal, Cannada</Text>
            </View>

            <View style={[styles.header_journey_details]}>
              <View style={[styles.journey_dates]}>
                <Text>CHECK IN</Text>
                <Text style={[styles.dates]}>Thu, 14 Jun</Text>
              </View>
              <View style={[styles.journey_dates, styles.journey_dates_arrows, , styles.spacing]}>
                <View>
                  <Text>CHECK OUT</Text>
                  <Text style={[styles.dates]}>Sun, 17 Jun</Text>
                </View>
                <Image
                  source={require('../../Images/right_arrow.png')}
                  style={[styles.right_arrow]}
                />
              </View>
              <View style={[styles.journey_dates, styles.journey_dates_arrows]}>
                <View>
                  <Text>2 Adults</Text>
                  <Text style={[styles.dates]}>1 Room</Text>
                </View>
                <Image
                  source={require('../../Images/right_arrow.png')}
                  style={[styles.right_arrow]}
                />
              </View>
            </View>

          </Card>

          <Card style={[styles.sub_header]}>
            <Text style={[styles.sub_header_heading]}>Facilities</Text>
            <View style={[styles.sub_header_contents]}>
              <View>
                <Image source={require('../../Images/wifi-icon.png')}
                  style={[styles.sub_header_facility_icon]}
                />
                <Text>Wifi</Text>
              </View>
              <View>
                <Image source={require('../../Images/open-bar-icon.png')}
                  style={[styles.sub_header_facility_icon]}
                />
                <Text>Open bar</Text>
              </View>
              <View>
                <Image source={require('../../Images/restaurant.png')}
                  style={[styles.sub_header_facility_icon]}
                />
                <Text>Restaurant</Text>
              </View>
              <View>
                <Image source={require('../../Images/plus-icon.jpeg')}
                  style={[styles.sub_header_facility_icon]}
                />
                <Text>view all</Text>
              </View>
            </View>
          </Card>

        </View>
        <View style={[styles.hotel_ratings]}>
          <View style={[styles.ratings]}>
            <View style={[styles.hotel_ratings, styles.flex_alignment]}>
              <Text style={{ fontSize: 25, paddingRight: 5 }}>4.5</Text>
              <Image source={require('../../Images/hotel-rating.png')}
                style={[styles.right_arrow]}
              />
            </View>
            <Text>56 Ratings &</Text>
            <Text>32 Reviews</Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <View style={[styles.progress_bar]}>
              <Text style={[styles.hotel_rating_info]}>Value for money</Text>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.6}
                style={{ width: 100, height: 20 }}
              />
              <Text style={{ paddingLeft: 10 }}>4.6/5</Text>
            </View>

            <View style={[styles.progress_bar]}>
              <Text style={[styles.hotel_rating_info]}>Location</Text>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                style={{ width: 100, height: 20 }}
              />
              <Text style={{ paddingLeft: 10 }}>2.7/5</Text>
            </View>

            <View style={[styles.progress_bar]}>
              <Text style={[styles.hotel_rating_info]}>Cleanliness</Text>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                style={{ width: 100, height: 20 }}
              />
              <Text style={{ paddingLeft: 10 }}>4.5/5</Text>
            </View>

            <View style={[styles.progress_bar]}>
              <Text style={[styles.hotel_rating_info]}>Amneties</Text>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                style={{ width: 100, height: 20, marginRight: 5 }}
              />
              <Text style={{ paddingLeft: 10 }}>3.5/5</Text>
            </View>
          </View>
        </View>

        <Text style={{
          margin: 10,
          padding: 10,
          color: 'red',
          backgroundColor: 'white'
        }}>Why book this hotel?</Text>
        {/* <View>
          <Button
            title="Book"
            color="red"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => this.props.navigation.navigate('phoneVerification')}
          />
        </View> */}
        <Button style={styles.book_btn} onPress={() => this.props.navigation.navigate('payment')}>
          <Text style={{ marginLeft: 160, color: 'white', fontSize: 18 }}>Book</Text>
        </Button>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  home_image: {
    width: '100%',
    resizeMode: 'stretch',
    height: 250
  },
  header_title_hotel_name: {
    fontSize: 18,
    color: 'black'
  },
  header: {
    position: 'absolute',
    top: 200,
    left: 10,
    right: 10
  },
  header_title: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    padding: 10
  },
  header_journey_details: {
    display: 'flex',
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-around'
  },
  journey_dates: {
    padding: 10,
    width: 130,
  },
  journey_dates_arrows: {
    borderRightColor: '#D3D3D3',
    borderRightWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  dates: {
    color: 'black'
  },
  right_arrow: {
    width: 20,
    height: 20,
    marginLeft: 1
  },
  spacing: {
    marginRight: 20
  },
  sub_header: {
    marginTop: 110,
    marginLeft: 10,
    marginRight: 10
  },
  sub_header_heading: {
    marginTop: 10,
    marginLeft: 15
  },
  sub_header_contents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10
  },
  sub_header_facility_icon: {
    width: 30,
    height: 30,
    alignSelf: 'center'
  },
  hotel_ratings: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  flex_alignment: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratings: {
    marginTop: 20,
    marginBottom: 20,
    borderRightColor: 'gray',
    borderRightWidth: 1,
    padding: 7
  },
  progress_bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    marginLeft: 5
  },
  hotel_rating_info: {
    fontSize: 13,
    width: 105,
    paddingRight: 4
  },
  book_btn: {
    backgroundColor: 'red',
    width: '95%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10
  }
});