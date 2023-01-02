import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { btn1, colors, hr80, navbtn, navbtnin } from '../global/Style';
import { AntDesign } from '@expo/vector-icons';
import { Featuredproduct } from '../Data/Featuredproducts';

const Placeorder = ({ navigation, route }) => {
    const [orderdata, setOrderdata] = useState([]);
    const [totalCost, setTotalCost] = useState('2000');
    return (
        <ScrollView style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>

                <Text style={styles.head1}>Your Order Summary</Text>
                            <View style={styles.rowout}>
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Text style={styles.qty}>1</Text>
                                        <Text style={styles.title}>Sneaker</Text>
                                        <Text style={styles.price1}>Rs 2000</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.totalprice}>2000</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Text style={styles.qty}>1</Text>
                                        <Text style={styles.title}>Quantity</Text>
                                        <Text style={styles.price1}>1</Text>
                                    </View>
                                  
                                </View>
                            </View>
                  
                <View style={hr80}>

                </View>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <Text style={styles.title}>Order Total :</Text>
                    </View>
                    <View style={styles.left}>
                        <Text style={styles.totalprice}>{totalCost}</Text>
                    </View>
                </View>

                <View style={hr80}>
                </View>

                <View style={styles.userdataout}>
                    <Text style={styles.head1}>Your Details</Text>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Name :</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>Hassan Lodhi</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Email :</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>muhammadhassanlodhi123@gmail.com</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Phone :</Text>
                        </View>

                        <View style={styles.right}>
                            <Text style={styles.title}>03181215451</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Address :</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>l871 sector 2 north karachi</Text>
                        </View>
                    </View>
                </View>

                <View style={hr80}></View>

                <View >
                    <TouchableOpacity style={btn1}>
                        <Text style={styles.btntext} onPress={() => placenow()}>Proceed to Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Placeorder

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    head1: {
        fontSize: 30,
        fontWeight: '200',
        color: colors.text1,
        margin: 10,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    rowout: {
        flexDirection: 'column',
        margin: 10,
        elevation: 10,
        backgroundColor: colors.col1,
        padding: 10,
        borderRadius: 10,
    },

    qty: {
        width: 30,
        height: 30,
        backgroundColor: colors.text1,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 10,
        color: colors.col1,
        fontSize: 17,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
    },
    price1: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
        color: colors.text1,
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        flexDirection: 'row',
    },
    totalprice: {
        fontSize: 17,
        fontWeight: 'bold',
        borderColor: colors.text1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    btntext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.col1,
        margin: 10,
    }
})