import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native"
import { StatusBar } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';
import Categories from '../components/Categories'
import HomeHeadNav from '../components/HomeHeadNav'
import BottomNav from '../components/BottomNav';
import OfferSlider from '../components/OfferSlider'
import Cardslider from '../components/CardSlider'
import { colors } from '../global/Style';
import { Featuredproduct } from '../Data/Featuredproducts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';

const HomeScreen = ({ navigation }) => {
    const dispatch =useDispatch()
    const [myData, setmyData] = useState([]);
  
    const fetchProduct = async () => {
        try {
            dispatch(fetchProducts())
            // const response = await fetch("https://restapi-production-6795.up.railway.app/api/products"
        
            // const result = await response.json();
            // console.log("result", result)
        } catch (error) {
            // console.log( error);
        }
    }

    useEffect(() => { fetchProduct() }, []);
    return (
        <View style={styles.container}>
            {/* <HomeHeadNav /> */}
            <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View>
            <ScrollView>
                <View style={styles.searchbox}>
                    <AntDesign name='search1' size={24} color="black" style={styles.searchicon} />
                    <TextInput style={styles.input} placeholder='search' />
                </View>
                <Categories name={"Categories"} />
                <OfferSlider />
                <Cardslider title={"FEATURED PRODUCTS"}  navigation={navigation} />



            </ScrollView>
        </View>
    )
}

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
export default HomeScreen;
