import { Pressable, Text, View } from "react-native";
import { Image, StyleSheet } from "react-native"
import { Link } from "expo-router";
import { router } from 'expo-router';

export default function Index() {

  return (
    <View
      testID="view-container"
      style={{
        backgroundColor: "#301038",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center", paddingBottom: 20 }}>
        <Image 
          testID="logo-image"
          source={require("@/assets/images/bridge-logo-white.png")} 
          style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
        <Text style={styles.titleContainer}>Welcome to Bridge!</Text>
      </View>
      <View style={{ alignItems: "center", gap: 10 }}>
        <Pressable 
          role="button" 
          style={({ pressed }) => [
            {
              backgroundColor: pressed
              ? 'rgb(8, 81, 29)'
              : 'rgb(11, 102, 37)'
            },styles.loginButton]} 
          onPress={() => router.push("/profile")}
        >
          <Text style={{fontWeight: 'bold', color: 'white' }}>Login</Text>
        </Pressable>
        <Text style={{color: 'white'}}>Forgot your password?</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  loginButton: {
    padding: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 5,
    // backgroundColor: 'rgb(11, 102, 37)'
  }
})
