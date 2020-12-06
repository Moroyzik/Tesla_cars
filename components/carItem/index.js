import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/modelS.jpg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69.420</Text>
      </View>

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
  );
};

export default CarItem;
