import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



function Welcome(navigation) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log("Welcome to the app!")} style={{ backgroundColor: "#FAF8F1", padding: 20, borderRadius: 25, marginBottom: 20 }}>
                <Text style={styles.Text}>Play With Robot</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Welcome to the app!")} style={{ backgroundColor: "#FAF8F1", padding: 20, borderRadius: 25 }}>
                <Text style={styles.Text}>Play With Freind</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAEAB1",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        fontFamily: "Roboto",
        color: "#C58940",
        fontSize: 20,
        fontWeight: "bold",
    },
});
export default Welcome;