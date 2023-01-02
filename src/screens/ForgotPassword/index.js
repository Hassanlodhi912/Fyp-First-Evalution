import { useState } from 'react'
import { View, StyleSheet } from "react-native"

import { TextInput, Button, Text } from "@react-native-material/core";

import { loginUser } from '../../config/firebase'
import { bgColor, lightShade, darkShade } from '../../config/colors';

export default function ForgotPassword({ navigation }) {
    const [formData, setFormData] = useState({
        email: "nabeel@gmail.com",
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

        const result = { error: true, message: 'work in progress' }

        if (result.error) {
            // Alert()
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
            <Text variant="h4" style={styles.text}>Forgot Password</Text>
            <Text variant="h6" style={styles.text}>Enter your email for password recovery</Text>
            <TextInput
                onChangeText={text => handleChangeText('email', text)}
                value={formData.email}
                label="email"
                style={styles.spacing}
                color={darkShade}
            />
            <Button
                loading={loading}
                title="Submit"
                onPress={handlePress}
                style={styles.spacing}
                color={darkShade}
            >
            </Button>
            <Button
                title="Go To Login"
                onPress={() => navigation.navigate("login")}
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