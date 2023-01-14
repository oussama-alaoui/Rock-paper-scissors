import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Play() {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#FAF8F1", width: "100%", height: "50%", alignItems: "center", justifyContent: "center",}}>
                <Text style={styles.Text}>Play With Robot ....</Text>
            </View>
            <View style={{width: "90%", height: "50%", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress={() => console.log("Welcome to the app!")} style={{ backgroundColor: "#FAF8F1"}}>
                    <Text style={styles.Text}>Play</Text>
                </TouchableOpacity>

                <View style={{height: 'auto', marginTop: 40, flexDirection: 'row', justifyContent: 'space-between', width: "90%"}}>
                    <TouchableOpacity onPress={() => console.log("Welcome to the app!")} style={{ backgroundColor: "#FAF8F1",}}>
                        <Text style={styles.Text}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Welcome to the app!")} style={{ backgroundColor: "#FAF8F1",}}>
                        <Text style={styles.Text}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
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

export default Play;