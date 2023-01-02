import { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper'
import { Text } from '@react-native-material/core'
import { blue, white } from '../../config/colors'

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text variant="h4" style={styles.text}>Dashboard</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: white,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 16,
        textAlign: "center",
        color: blue
    },
    card: {
        // backgroundColor: "#ffb6c1",
        margin: 15,
        marginBottom: 15,
        borderRadius: 10
    }
});