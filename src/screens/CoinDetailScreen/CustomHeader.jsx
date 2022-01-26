import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import styles from './styles';

const CustomHeader = ({symbol,img,rank}) => {
  
  return (
    <View style={[styles.header]}>
        <Ionicons name="chevron-back" size={30} color="#fff" />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri:img}} style={{height:30,width:30}} />
          <Text style={[styles.symbol]}>{symbol.toUpperCase()}</Text>
          <View style={[styles.rankContainer]}>
            <Text style={[styles.rank]}>#{rank}</Text>
          </View>
        </View>

        <EvilIcons name="user" size={35} color="white" />
      </View>
  );
};

export default CustomHeader;
