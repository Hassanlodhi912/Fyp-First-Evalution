import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import welcomeImg from "../../assets/welcome1.png"
import { colors, hr80 } from '../../src/global/Style';
const Welcome = ({navigation}) => {

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome Back
            </Text>
            <Text style={styles.text}>
                You Need to Identify to Sign in
            </Text>
            <View style={styles.logoout}>
                <Image source={welcomeImg} style={styles.logo}/>
            </View>
            <Text style={styles.text}>
                The State of Voice Shopping in Pakistan
            </Text>
            <View style={hr80} />
            <View style={styles.btnout}>
                <TouchableOpacity  >
                    <Text style={styles.btn} onPress={()=>navigation.navigate("signup")}>
                        Sign up
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.btn} onPress={()=>navigation.navigate("login")}>
                            Sign In
                        </Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FCE700",
        width: '100%',
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 50,
        color: colors.col2,
        textAlign: 'center',
        marginVertical: 40,
        fontWeight: '200',
    },
    logoout: {
        width: "80%",
        height: "30%",
        // backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    
    text: {
        fontSize: 16,
        width: '80%',
        color: colors.col2,
        textAlign: 'center',
    },
    btnout: {
        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
    },
})
export default Welcome;

