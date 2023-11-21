import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Keyboard, Alert } from "react-native";
import auth from "@react-native-firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation();

  const handleLogin = async () => {
    if (email && password) {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        nav.replace("Home");
      } catch (error) {
        Alert.alert("Oops, please check your credentials and try again.");
      }
    }
  };

  return (
    <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title} onPress={() => nav.navigate("Home")}>Etsy</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Login</Text>
          </View>
          <View style={styles.text2}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => nav.navigate("Register")} ><Text style={styles.text1}> Register</Text></TouchableOpacity>
          </View>
          <View style={styles.mainContainer}>
            <TextInput
              style={styles.loginTextField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <Pressable style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    marginTop:0,
    fontSize:30,
    fontWeight:'bold',
    color: '#ff5722'
  },
  text1:{
    fontSize: 15,
    fontWeight: "bold",
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  mainContainer: {
    width: "100%",
  },
  loginTextField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: "blue",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});