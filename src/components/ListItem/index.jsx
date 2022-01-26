import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const MarketCap=(mcap)=>{
  if(mcap > 1_000_000_000_000){
    return `${(mcap/1_000_000_000_000).toFixed(3)} T`
  }
  if(mcap > 1_000_000_000){
    return `${(mcap/1_000_000_000).toFixed(3)} B`
  }
  if(mcap > 1_000_000){
    return `${(mcap/1_000_000).toFixed(3)} M`
  }
  if(mcap > 1_000){
    return `${(mcap/1_000).toFixed(3)} K`
  }
  return mcap
}

const ListItem = ({name,rank, img, symbol, currPrice, perc, mcap}) => {
  return (
    <View style={[styles.list]}>
        <Image 
          source={{uri: img}} 
          style={{height:30, width:30, alignSelf: 'center'}} 
        />
        <View style={[styles.details]}>
          <Text style={[styles.title]}>
            {name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rank}>
            <Text style={[styles.text,{marginLeft: 0, fontWeight: 'bold'}]}>{rank}</Text>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={styles.text}>{symbol.toUpperCase()}</Text>
              <AntDesign 
                name={perc >  0?'caretup':'caretdown'}
                size={13} 
                color={perc>0?"#00e28c":'#fe1439' }
                style={{marginLeft: 5}}
              />
              <Text style={[styles.text,{color:perc>0?"#00e28c":'#fe1439' }]}>{parseFloat(perc).toFixed(2)} %</Text>
            </View>
          </View>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text style={[styles.price, {marginLeft: 'auto'}]}>{currPrice}</Text>
          <Text style={[styles.MCap]}>MCap {MarketCap(mcap)}</Text>
        </View>
      </View>
  );
};
export default ListItem;
