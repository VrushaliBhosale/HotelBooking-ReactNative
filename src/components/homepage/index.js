import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card } from 'native-base';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          item: <Image source={require('../../Images/location-icon.png')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>Nearby</Text>
        },
        {
          item: <Image source={require('../../Images/pars.jpeg')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>Paris</Text>
        },
        {
          item: <Image source={require('../../Images/switzerland.jpeg')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>switzerland</Text>
        },
        {
          item: <Image source={require('../../Images/Newyork.jpeg')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>Newyork</Text>
        },
        {
          item: <Image source={require('../../Images/newdelhi.jpeg')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>New Delhi</Text>
        },
        {
          item: <Image source={require('../../Images/switzerland.jpeg')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>switzerland</Text>
        },
        {
          item: <Image source={require('../../Images/switzerland.jpeg')}
            style={styles.images}
          />,
          text: <Text style={{ alignSelf: 'center', padding: 5 }}>switzerland</Text>
        }
      ]
    }
  }

  renderItem({ item }) {
    return (
      <View style={{ paddingRight: 2 }}>
        {item.item}
        {item.text}
      </View>
    );
  }


  render() {
    return (
      <View style={{ backgroundColor: '#D3D3D3' }}>
        <Card>
          <View style={[styles.header]}>

            <View style={[styles.cirlular_text, styles.head, styles.header_margin]}>
              <View><Text style={[styles.size]}>Hotel</Text></View>
              <View style={{
                marginLeft: 3,
                width: 50,
                height: 50,
                alignItems: "center",
                paddingTop: 10,
                borderRadius: 30,
                backgroundColor: 'red'
              }}><Text style={[styles.white_clr, styles.size]}>Up</Text></View>
            </View>
            <Image source={require('../../Images/profile.png')}
              style={[styles.profile_image, styles.header_margin]}
            />
          </View>
        </Card>
        <View style={[styles.content,]}>
          <ScrollView>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.images}
              renderItem={this.renderItem}
              sliderWidth={380}
              itemWidth={100}
            />
          </ScrollView>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <TextInput
              placeholder="Where are you travelling?"
              style={{
                width: 300,
                height: 50,
                borderColor: '#C8C8C8',
                borderWidth: 1,
                borderRadius: 30,
                alignSelf: 'center',
                backgroundColor: 'white',
                margin: 20,
                paddingLeft: 15
              }}
            />
            <Button style={[styles.search_btn]} onPress={() => this.props.navigation.navigate('hotellist')}><Text>Search</Text></Button>
          </View>
        </View>
        <Text style={{ paddingLeft: 10 }}>POPULAR DESTINATIONS</Text>
        <View>
          <Image source={require('../../Images/destination4.jpeg')}
            style={styles.destination_full_image}
          />
          <Text style={{
            color: 'white',
            position: 'absolute',
            top: 170,
            left: 30
          }}>HOLIDAY TRAVEL 2018</Text>
        </View>
        <View style={styles.nearby_places}>
          <Image source={require('../../Images/destination2.jpeg')}
            style={styles.destination_images}
          />
          <Text style={{
            color: 'white',
            position: 'absolute',
            top: 120,
            left: 30
          }}>WORLD HERITAGE</Text>
          <Image source={require('../../Images/destination3.jpeg')}
            style={styles.destination_images}
          />
          <Text style={{
            color: 'white',
            position: 'absolute',
            top: 120,
            left: 220
          }}>BEST PLACE TO LIVE</Text>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header_margin: {
    margin: 15
  },
  cirlular_text: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
  },
  white_clr: {
    color: 'white',
    fontSize: 15
  },
  nearby_places: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 180
  },
  images: {
    width: 95,
    height: 100,
    padding: 10
  },
  destination_full_image: {
    width: '90%',
    margin: 20
  },
  destination_images: {
    width: '43%',
    height: 150
  },
  profile_image: {
    width: 30,
    height: 30
  },
  content: {

  },
  search_btn: {
    padding: 15,
    backgroundColor: 'white',
    alignSelf: 'center',
    backgroundColor: '#42aaf5',
    marginRight: 5
  }
})
