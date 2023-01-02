import React, { useState } from 'react'
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Alert, StatusBar,
    ScrollView, SafeAreaView
} from 'react-native';
import { titles, colors, btn1, hr80, btn2 } from "../global/Style";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { loginUser } from '../config/firebase';

const LoginScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        email: "hassan@gmail.com",
        password: "123456"
    })

    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customerror, setcustomError] = useState('');
    const [text, setText] = React.useState("");

    const handleChangeText = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handlePress = async () => {
        // setLoading(true)
        if (!formData.email) {
            return alert("Please enter your email")
        }
        if (formData.password.length < 6) {
            return alert("Your password must be at least 6 characters long")
        }
        const result = await loginUser(formData)
        if (result.error) {
            Alert.alert(
                "Error",
                result.message,
                [
                    { text: "OK" }
                ]
            )
        }
        else {
            Alert.alert(
                "Success",
                result.message,
                [
                    { text: "OK" }
                ]
            )
        }
    }

    return (
        <View style={styles.container}>
                    {/* <SafeAreaView > */}
                {/* <ScrollView > */}
                    <Text style={styles.head1}>Sign In</Text>
                    <View style={styles.inputout}>
                        <AntDesign name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Email" onFocus={() => {
                            setEmailfocus(true)
                            setPasswordfocus(false)
                            setShowpassword(false)
                            setcustomError('')

                        }}
                            value={formData.email}
                            onChangeText={text => handleChangeText('email', text)}
                        />
                    </View>
                    <View style={styles.inputout}>
                        <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus == true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Password" onFocus={() => {
                            setEmailfocus(false)
                            setPasswordfocus(true)
                            setcustomError('')
                        }}
                            secureTextEntry={showpassword === false ? true : false}
                            value={formData.password}
                            onChangeText={text => handleChangeText('password', text)}
                        />
                        <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowpassword(!showpassword)} />
                    </View>
                    <TouchableOpacity style={btn2} onPress={handlePress}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                    <Text style={styles.or}>OR</Text>
                    <Text style={styles.gftxt}>Sign In With </Text>
                    <View style={styles.gf}>
                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <AntDesign name="google" size={24} color="#EA4335" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <FontAwesome5 name="facebook-f" size={24} color="#4267B2" /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={hr80}></View>
                    <Text >Don't have an account?
                        <Text style={styles.signup} onPress={() => navigation.navigate('signup')}> Sign Up</Text>
                    </Text>
                {/* </ScrollView> */}
            {/* </SafeAreaView> */}
        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: 'center',
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt: {
        color: colors.text2,
        marginVertical: 10,
        fontSize: 25,
    },
    gf: {
        flexDirection: 'row'
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
        

    },
    signup: {
        color: colors.text1,
    },
    errormsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
})