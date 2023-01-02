import { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from "react-native"

import { TextInput, Button, Text } from "@react-native-material/core";

import { onAuthStateChanged } from 'firebase/auth'

import { getCurrentUserData, logoutUser, updateCurrentUserData } from '../../config/firebase'
import { auth } from '../../config/firebase';
import { lightShade, darkShade } from '../../config/colors';

export default function Profile() {

    const [formData, setFormData] = useState()
    console.log("profile", formData)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid
                const result = await getCurrentUserData(uid)
                setFormData(result)
            }
        });
    }, [])

    const handleChangeText = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handlePress = () => {
        if (!formData.name) {
            return alert("Enter name")
        }
        if (formData.phoneNumber.length != 11) {
            return alert("Enter phoneNumber of 11 digits")
        }
        if (!formData.email) {
            return alert("Enter email")
        }
        if (formData.password.length != 6) {
            return alert("Password must be al least 6 characters long")
        }
        updateCurrentUserData(formData)
    }

    if (!formData) {
        return <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    }

    return (<View style={styles.container}>
        <Text variant="h5" style={styles.text}>Update Your Profile</Text>
        <TextInput
            onChangeText={text => handleChangeText('name', text)}
            value={formData.name}
            label="name"
            style={styles.spacing}
            color={lightShade}
        />
        <TextInput
            onChangeText={text => handleChangeText('phoneNumber', text)}
            value={formData.phoneNumber}
            label="phoneNumber"
            style={styles.spacing}
            color={lightShade}
        />
        <TextInput
            onChangeText={text => handleChangeText('email', text)}
            value={formData.email}
            label="email"
            style={styles.spacing}
            color={lightShade}
        />
        <Button
            title="Update"
            onPress={handlePress}
            style={styles.spacing}
            color={darkShade}

        >
        </Button>
        <Button
            variant="outlined"
            title="logout"
            color={darkShade}
            style={{ margin: 30, textAlign: "center" }}
            onPress={logoutUser}

        >
        </Button>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
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