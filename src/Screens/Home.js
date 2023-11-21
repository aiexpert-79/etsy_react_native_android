import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: require('../../assets/images/home1.png'),
      price: 10,
    },
    {
      id: 2,
      title: "Product 2",
      image: require('../../assets/images/home2.png'),
      price: 20,
    },
    {
      id: 3,
      title: "Product 3",
      image: require('../../assets/images/home3.png'),
      price: 30,
    }
  ];

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );
  
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Etsy</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => nav.navigate("Login")}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("Register")}>
            <FontAwesomeIcon icon={faCartShopping} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    marginTop:50,
    fontSize:30,
    fontWeight:'bold',
    color: '#ff5722'
  },
  iconContainer: {
    marginTop:50,
    flexDirection: "row",
  },
  icon: {
    fontSize: 24,
    marginLeft: 16,
  },
  productList: {
    flexGrow: 1,
  },
  productItem: {
    flex: 1,
    margin: 8,
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
    resizeMode: "cover",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "gray",
  },
});

export default Home;