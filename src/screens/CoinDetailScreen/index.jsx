import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomHeader from './CustomHeader';
import { AntDesign } from '@expo/vector-icons';
import Coin from '../../../assets/data/crypto.json';
import styles from './styles';

const CoinDetailScreen = () => {

  const {image:{small},
         name,
         symbol,
         market_data:{market_cap_rank, current_price, price_change_percentage_24h}
        } = Coin;

  return (
    <View style={{paddingHorizontal: 10}}>
      <CustomHeader  symbol={symbol} img={small} rank={market_cap_rank}/>

      <Text style={[styles.name]}>{name}</Text>

      <View style={[styles.cruxDetail]}>
        <Text style={[styles.currPrice]}>{current_price.usd} US$</Text>
        <View style={[styles.percentageView, {backgroundColor:price_change_percentage_24h>0? "#00e28c":'#f24438' }]}>
          <AntDesign 
            name={price_change_percentage_24h >  0?'caretup':'caretdown'}
            size={13} 
            color={'#fff'}
            style={{marginLeft: 5}}
          />
          <Text style={[styles.percentage]}>{price_change_percentage_24h.toFixed(2)} %</Text>
          
        </View>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
