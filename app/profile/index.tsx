import { ImageBackground } from "expo-image";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Profile() {

    return (
        <View style={{flex: 1}}>
            <View style={styles.profileTitle}>
                {/* <Image 
                    source={require("@/assets/images/bridge-sidebar-logo.png")} 
                    style={{ width: 50, height: 50,resizeMode: "contain" }} 
                /> */}
                <Text style={{color: 'white', fontSize: 28}}>Profile</Text>
            </View>

            <View style={styles.profileBody}>
                <View style={{
                    flexDirection: "column", 
                    justifyContent: "space-between", 
                    backgroundColor: "rgb(239, 232, 241)",
                    height: 100,
                }}
                >
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileTitle: {
        backgroundColor: "#301038",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        paddingBottom: 10,
        paddingLeft: 20
    },
    profileBody: {
        // backgroundColor: "rgb(239, 232, 241)",
    }

})
