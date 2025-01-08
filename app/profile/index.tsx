import { View, Text, StyleSheet } from "react-native";


export default function Profile() {

    return (
        <View style={styles.profileContainer}>
            <Text style={{color: 'white'}}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: "#301038",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
