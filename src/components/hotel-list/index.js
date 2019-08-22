import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button, Content, Footer, FooterTab, Container } from 'native-base';
import { TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback, } from 'react-native-gesture-handler';

export default class HotelList extends Component {
  render() {
    return (
      <Container>
        {/* <View> */}
        <View style={[styles.header_display]} >
          <Text style={{ fontSize: 16, color: 'black' }}>Montreal,Canada</Text>
          <Image source={require('../../Images/search-icon.png')}
            style={{ width: 20, height: 30 }}
          />
        </View>
        <View style={[styles.journey_dates_wrapper]}>
          <View style={[styles.journey_dates]}>
            <Text style={[styles.red_clr]}>Thu, 14 Jun</Text>
            <Text>12:00 PM</Text>
          </View>

          <View style={[styles.journey_dates]}>
            <Text style={[styles.red_clr]}>SUn, 17 Jun</Text>
            <Text>11:00 AM</Text>
          </View>

          <View style={[styles.journey_dates]}>
            <Text style={[styles.red_clr]}>1 Room</Text>
            <Text>2 Adults</Text>
          </View>
        </View>
        <Content>
          <ScrollView>
            <View style={[styles.hotel_list_wrapper]}>
              <Card>
                <TouchableNativeFeedback style={[styles.hotel_list]}
                  onPress={() => { this.props.navigation.navigate('hoteldetails'), console.log('Pressed') }}>
                  <Image source={require('../../Images/destination1.jpeg')}
                    style={[styles.hotel_image]}
                  />
                  <View>
                    <Text style={[styles.hotel_title]}>Hotel Blue Sky</Text>
                    <Text style={[styles.hotel_subtitle]}>5th street, Montreal</Text>
                    <View style={[styles.hotel_ratings_wrapper]}>
                      <Text style={[styles.hotel_rate]}> 4.5</Text>
                      <Text style={[styles.hotel]}>Fabulous</Text>
                    </View>
                    <Text>free Cancellation, Free Wi-Fi</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>$199</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: 'red', fontSize: 20 }}>$149</Text>
                      <Text> 25% OFF</Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              </Card>

              <Card>
                <View style={[styles.hotel_list]}>
                  <Image source={require('../../Images/destination1.jpeg')}
                    style={[styles.hotel_image]}
                  />
                  <View>
                    <Text style={[styles.hotel_title]}>Hotel Blue Sky</Text>
                    <Text style={[styles.hotel_subtitle]}>5th street, Montreal</Text>
                    <View style={[styles.hotel_ratings_wrapper]}>
                      <Text style={[styles.hotel_rate]}> 4.5</Text>
                      <Text style={[styles.hotel]}>Fabulous</Text>
                    </View>
                    <Text>free Cancellation, Free Wi-Fi</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>$199</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: 'red', fontSize: 20 }}>$149</Text>
                      <Text> 25% OFF</Text>
                    </View>
                  </View>
                </View>
              </Card>

              <Card>
                <View style={[styles.hotel_list]}>
                  <Image source={require('../../Images/destination1.jpeg')}
                    style={[styles.hotel_image]}
                  />
                  <View>
                    <Text style={[styles.hotel_title]}>Hotel Blue Sky</Text>
                    <Text style={[styles.hotel_subtitle]}>5th street, Montreal</Text>
                    <View style={[styles.hotel_ratings_wrapper]}>
                      <Text style={[styles.hotel_rate]}> 4.5</Text>
                      <Text style={[styles.hotel]}>Fabulous</Text>
                    </View>
                    <Text>free Cancellation, Free Wi-Fi</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>$199</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: 'red', fontSize: 20 }}>$149</Text>
                      <Text> 25% OFF</Text>
                    </View>
                  </View>
                </View>
              </Card>

              <Card>
                <View style={[styles.hotel_list]}>
                  <Image source={require('../../Images/destination1.jpeg')}
                    style={[styles.hotel_image]}
                  />
                  <View>
                    <Text style={[styles.hotel_title]}>Hotel Blue Sky</Text>
                    <Text style={[styles.hotel_subtitle]}>5th street, Montreal</Text>
                    <View style={[styles.hotel_ratings_wrapper]}>
                      <Text style={[styles.hotel_rate]}> 4.5</Text>
                      <Text style={[styles.hotel]}>Fabulous</Text>
                    </View>
                    <Text>free Cancellation, Free Wi-Fi</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>$199</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: 'red', fontSize: 20 }}>$149</Text>
                      <Text> 25% OFF</Text>
                    </View>
                  </View>
                </View>
              </Card>

              <Card>
                <View style={[styles.hotel_list]}>
                  <Image source={require('../../Images/destination1.jpeg')}
                    style={[styles.hotel_image]}
                  />
                  <View>
                    <Text style={[styles.hotel_title]}>Hotel Blue Sky</Text>
                    <Text style={[styles.hotel_subtitle]}>5th street, Montreal</Text>
                    <View style={[styles.hotel_ratings_wrapper]}>
                      <Text style={[styles.hotel_rate]}> 4.5</Text>
                      <Text style={[styles.hotel]}>Fabulous</Text>
                    </View>
                    <Text>free Cancellation, Free Wi-Fi</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>$199</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: 'red', fontSize: 20 }}>$149</Text>
                      <Text> 25% OFF</Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        </Content>
        <Footer>
          <FooterTab style={[styles.sort_and_filter, styles.flex_content_space_btwn]}>
            {/* <View > */}
            <Button style={[styles.sort_and_filter, styles.sort, styles.flex_content_space_around]}>
              <Image source={require('../../Images/sort_icon.png')}
                style={[styles.sort_filter_icon]}
              />
              <Text>Sort</Text>
            </Button>

            <Button style={[styles.sort_and_filter, styles.sort, styles.flex_content_space_around]} onPress={() => this.props.navigation.navigate('filter')}>
              <Image source={require('../../Images/filter.png')}
                style={[styles.sort_filter_icon]}
              />
              <Text>Filter</Text>
            </Button>
            {/* </View> */}
          </FooterTab>
        </Footer>
        {/* </View > */}
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  journey_dates_wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10
  },
  journey_dates: {
    padding: 10,
    width: 130,
    margin: 10,
    borderRightColor: '#D3D3D3',
    borderRightWidth: 1,
    textAlign: 'center'
  },
  red_clr: {
    color: 'red'
  },
  hotel_list_wrapper: {
    backgroundColor: '#D8D8D8',
    padding: 3
  },
  hotel_list: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    //margin: 10
  },
  hotel_image: {
    width: 160,
    height: 150,
    resizeMode: 'stretch',
    marginRight: 10
  },
  hotel_title: {
    fontSize: 20
  },
  hotel_subtitle: {
    color: 'gray',
    padding: 5
  },
  hotel_ratings_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    //margin: 5
  },
  hotel_rate: {
    backgroundColor: '#32CD32',
    color: 'white',
    padding: 3,
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11
  },
  hotel: {
    backgroundColor: '#90EE90',
    color: 'green',
    padding: 3,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11
  },
  sort_filter_icon: {
    width: 25,
    height: 25,
    borderRadius: 70,
  },
  like_icon_position: {
    position: 'absolute',
    top: 300,
    left: 10
  },
  sort_and_filter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  flex_content_space_btwn: {
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  flex_content_space_around: {
    justifyContent: 'space-around'
  },
  sort: {
    width: 190,
    padding: 30,
    height: 50,
    backgroundColor: 'white'
  },
  header_display: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 20,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1
  }
})  