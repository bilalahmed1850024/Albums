import React, { Children } from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from "./Button"

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainer,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={headerTextStyle}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style= {imageStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>
  <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignitems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
