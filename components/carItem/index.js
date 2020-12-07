import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const CarItem = (props) => {
  const {name, tagLine, tagLineCTA, image} = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Custom order'}
          onPress={() => {
            console.warn('Order was press');
          }}
        />

        <StyledButton
          type="secondary"
          content={'Existing inventory'}
          onPress={() => {
            console.warn('Existing inventory was press');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
