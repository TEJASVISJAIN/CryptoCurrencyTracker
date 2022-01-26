import React from 'react';
import { View, Text, FlatList } from 'react-native';
import currencies from '../../../assets/data/cryptocurrencies.json';
import ListItem from '../../components/ListItem';

const HomeScreen = () => {
  return (
    <View>
      <FlatList 
        data={currencies}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>
          <ListItem 
            name={item.name}
            rank={item.market_cap_rank}
            img={item.image}
            symbol={item.symbol}
            currPrice={item.current_price}
            perc={item.price_change_percentage_24h}
            mcap={item.market_cap}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
