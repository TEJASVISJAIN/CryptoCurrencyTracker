import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list:{
    flexDirection: 'row',
    borderBottomColor: '#3c465f',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingBottom:10,
    paddingTop: 10
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
    height:20,
    width: 20,
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
})