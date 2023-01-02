import { useState } from 'react'
import { View, StyleSheet } from "react-native"

import { TextInput, Button, Text } from "@react-native-material/core";

import { signupUser } from "../../config/firebase";
import { lightShade, bgColor, darkShade } from '../../config/colors';

export default function Signup({ navigation }) {
    const [formData, setFormData] = useState({
        name: "nabeel rizwan",
        phoneNumber: "03362319053",
        email: "nabeel@gmail.com",
        password: "123456"
    })
    const [loading, setLoading] = useState(false)

    // console.log("signup", formData)

    const handleChangeText = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handlePress = async () => {
        setLoading(true)

        if (!formData.name) {
            return alert("Enter name")
        }
        if (!formData.phoneNumber.length) {
            return alert("Enter phone number of 11 digits")
        }
        if (!formData.email) {
            return alert("Enter email")
        }
        if (formData.password.length != 6) {
            return alert("Password must be al least 6 characters long")
        }
        const result = await signupUser(formData)
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
            <Text variant="h3" style={styles.text}>Signup</Text>
            <TextInput
                onChangeText={text => handleChangeText('name', text)}
                value={formData.name}
                label="Full Name"
                style={styles.spacing}
                color={darkShade}
            />
            <TextInput
                onChangeText={text => handleChangeText('phoneNumber', text)}
                value={formData.phoneNumber}
                label="Phone Number"
                style={styles.spacing}
                color={darkShade}
            />
            <TextInput
                onChangeText={text => handleChangeText('email', text)}
                value={formData.email}
                label="Email"
                style={styles.spacing}
                color={darkShade}

            />
            <TextInput
                onChangeText={text => handleChangeText('password', text)}
                value={formData.password}
                label="Password"
                style={styles.spacing}
                color={darkShade}
            />
            <Button
                loading={loading}
                title="Signup"
                onPress={handlePress}
                color={darkShade}
                style={styles.spacing}
            >
            </Button>
            <Button
                title="Go To Login"
                onPress={handlePress}
                color={darkShade}
                style={styles.spacing}
                variant="text"
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