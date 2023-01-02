import React from 'react';
import { View,TextInput, StyleSheet, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/Style';
import { StatusBar } from 'react-native';
import OfferSlider from '../components/OfferSlider';
import CardSlider from '../components/CardSlider';
import { Featuredproduct } from '../Data/Featuredproducts';

const CategoriesScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.searchbox}>
          <AntDesign name='search1' size={24} color="black" style={styles.searchicon} />
          <TextInput style={styles.input} placeholder='search in clothes' />
        </View>
        <Categories name={"Clothing Categories"} />
        <OfferSlider/>
        <CardSlider title={"MENS CLOTHING"} data={Featuredproduct} navigation={navigation}/>
        <CardSlider title={"WOMENS CLOTHING"} data={Featuredproduct} navigation={navigation}/>
        <CardSlider title={"CHILD CLOTHING"} data={Featuredproduct} navigation={navigation}/>
      </ScrollView>

    </View>
  )
}

export default CategoriesScreen
const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    backgroundColor: colors.col1,
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: StatusBar.currentHeight,
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  seacrhresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor: colors.col1,
  },
  searchresultsinner: {
    width: '100%',
  },
  searchresult: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
  }
})