import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ListItem = () => {
  return (
    <View style={[styles.list]}>
        <Image 
          source={{uri: 'https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579'}} 
          style={{height:40, width:40, alignSelf: 'center'}} 
        />
        <View style={[styles.details]}>
          <Text style={[styles.title]}>
            Bitcoin
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rank}>
            <Text style={[styles.text,{marginLeft: 0, fontWeight: 'bold'}]}>1</Text>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={styles.text}>BTC</Text>
              <AntDesign 
                name="caretup" 
                size={13} 
                color="#00e28c" 
                style={{marginLeft: 5}}
              />
              <Text style={styles.text}>1,02 %</Text>
            </View>
          </View>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text style={[styles.price]}>56.998,33</Text>
          <Text style={[styles.MCap]}>MCap 1,079 T</Text>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  list:{
    flexDirection: 'row',
    borderBottomColor: '#3c465f',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingBottom:10
  },
  details:{
    marginLeft: 20,

  },
  title:{
    color: '#fff',
    fontSize: 18,
    fontWeight:'bold',
    marginBottom: 7
  },
  rank:{
    backgroundColor: '#323446',
    height:17,
    width: 17,
    borderRadius: 3, 
    alignItems: 'center',
  },
  text:{
    color: '#9fa6bc',
    marginLeft: 5
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    marginBottom: 7
  },
  MCap:{
    color: '#9fa6bc',
    fontSize: 15
  }
});
export default ListItem;
