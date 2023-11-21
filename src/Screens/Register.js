import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Keyboard, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repassword, setRepassword] = useState("");
  const nav = useNavigation();

  const createProfile = async (response) => {
    await database().ref(`/users/${response.user.uid}`).set({ name });
    await database().ref(`/users/${response.user.uid}/leaderboard`).set({ totalSteps: 0 });
  };

  const registerAndGoToMainFlow = async () => {

    if (email && password) {
      try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
        if (response.user) {
          await createProfile(response);
          nav.replace("Home");
        }
      } catch (error) {
        console.log("xxxxxx", error)
        Alert.alert("Oops, please check your form and try again.");
      }
    }
  };

  return (
    <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <View style={styles.text2}>
            <Text>Already have account? </Text>
            <TouchableOpacity onPress={() => nav.navigate("Login")} ><Text style={styles.text1}> Login </Text></TouchableOpacity>
          </View>
          <View style={styles.mainContainer}>
            <TextInput
              style={styles.loginTextField}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
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
            {/* <TextInput
              style={styles.loginTextField}
              placeholder="Confirm Password"
              value={repassword}
              onChangeText={setRepassword}
              secureTextEntry={true}
            /> */}
            <Pressable style={styles.registerButton} onPress={registerAndGoToMainFlow}>
              <Text style={styles.registerButtonText}>Register</Text>
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
  titleContainer: {
    marginBottom: 32,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
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
  registerButton: {
    backgroundColor: "blue",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});