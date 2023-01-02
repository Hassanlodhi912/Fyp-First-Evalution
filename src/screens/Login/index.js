import { useState } from 'react'
import { View, StyleSheet, Alert } from "react-native"

import { TextInput, Button, Text } from "@react-native-material/core";

import { loginUser } from '../../config/firebase'
import { bgColor, lightShade, darkShade } from '../../config/colors';

export default function Login({ navigation }) {
    const [formData, setFormData] = useState({
        email: "nabeel@gmail.com",
        password: "123456"
    })
    const [loading, setLoading] = useState(false)
    // console.log("login", text)

    const handleChangeText = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handlePress = async () => {
        setLoading(true)
        if (!formData.email) {
            return alert("Enter email")
        }
        if (formData.password.length != 6) {
            return alert("Password must be at least 6 characters long")
        }
        const result = await loginUser(formData)
        if (result.error) {
            // swal({
            //     title: "Error",
            //     text: result.message,
            //     icon: "error",
            // });
            setLoading(false)
        }
        else {
            // swal({
            //     title: "Success",
            //     text: result.message,
            //     icon: "success",
            // });
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text variant="h3" style={styles.text}>Login</Text>
            <TextInput
                onChangeText={text => handleChangeText('email', text)}
                value={formData.email}
                label="email"
                style={styles.spacing}
                color={darkShade}
            />
            <TextInput
                onChangeText={text => handleChangeText('password', text)}
                value={formData.password}
                label="password"
                style={styles.spacing}
                color={darkShade}
            />
            <Button
                loading={loading}
                title="Login"
                onPress={handlePress}
                style={styles.spacing}
                color={darkShade}
            >
            </Button>
            <Button
                title="Forgot Your Password"
                onPress={() => navigation.navigate("forgotPassword")}
                variant="text"
                color={darkShade}
                style={styles.spacing}
            >
            </Button>
            <Button
                title="Go To Signup"
                onPress={() => navigation.navigate("signup")}
                variant="text"
                color={darkShade}
                style={styles.spacing}
            >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: bgColor,

    },
    spacing: {
        margin: 30,
        marginBottom: 0
    },
    text: {
        margin: 16,
        textAlign: "center"
    }
})