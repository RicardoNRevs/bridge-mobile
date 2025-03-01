import { Pressable, Text, View } from "react-native";
import { Image, StyleSheet } from "react-native"
import { Link } from "expo-router";
import { router } from 'expo-router';

export default function Index() {

  return (
    <View
      testID="view-container"
      style={styles.indexContainer}
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
            /* use push for being available to move back between view or replace to avoid move back */
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
  indexContainer:{
    backgroundColor: "#301038",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
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
  }
})
