import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { btn1, btn2, colors, hr80, navbtn, navbtnin, navbtnout, nonveg, veg ,voicestyle} from '../global/Style.js';
import { MaterialIcons } from '@expo/vector-icons';


const CardSlider = ({ navigation,title,  }) => {
    const openProductPage = (item) => {
        navigation.navigate('detail',item)
    }

    const reduxData  = useSelector(state => state.productReducer.products)
    return (
        <View style={styles.container}>
             
            <Text style={styles.cardouthead}>
                {title}
            </Text>
            <FlatList style={styles.cardsout}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={reduxData}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.index}
                    onPress={() => { openProductPage(item) }}>
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image source={{uri :item.images
                                 } } style={styles.cardimgin} />
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.name}</Text>
                                <View style={styles.s2in}>
                                {item.Price == 'Recipe' ? <Text style={styles.txt2}></Text> : <Text style={styles.txt2}>Rs./{item.Price}</Text>}
                                    <Text style={nonveg}></Text>
                                </View>

                            </View>
                            <View style={styles.s3}>
                                <Text style={styles.buybtn}>
                                    Buy
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default CardSlider
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    //card
    cardouthead: {
        color: colors.text3,
        width: '90%',
        fontSize: 30,
        fontWeight: '400',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    cardsout: {
        width: '100%',
        // backgroundColor: 'red',
    },
    card: {
        // backgroundColor: "aqua",
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1,
    },
    cardimgin: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'aqua',
    },
    txt1: {
        fontSize: 18,
        color: colors.text3,
        marginHorizontal: 5,
        width: 150,
    },
    txt2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 10,
    },
    s2in: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    s3: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        width: '100%',
    },
    buybtn: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
    }
})