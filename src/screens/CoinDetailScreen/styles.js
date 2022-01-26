import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 cruxDetail:{
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
 },
 currPrice:{
  color: '#fff',
  fontSize:30,
  fontWeight: 'bold',
  marginTop: 5
 },
 header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name:{
    color: '#fff',
    fontSize: 18,
    marginTop: 10
  },
  percentage:{
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  percentageView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    borderRadius: 10,
  },
  rankContainer:{
    backgroundColor: '#323446',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5
  },
  rank:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3
  },
  symbol:{
    color: '#fff',
    fontWeight:'bold',
    fontSize: 20,
    paddingHorizontal: 10
  },
})