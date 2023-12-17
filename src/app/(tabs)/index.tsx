import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dummyPosts = [
  {
    username: 'JohnDoe',
    image: '/../../../images/logo.png',
    text: 'Enjoying a sunny day at the beach! 🏖️ #SummerVibes #BeachLife',
  },
  {
    username: 'JaneSmith',
    image: 'https://knowpathology.com.au/wp-content/uploads/2018/07/happy-test-screen-825x510.jpg',
    text: 'Exploring the city streets and discovering hidden gems. 🌆 #CityExplorer #Adventure',
  },
  {
    username: 'NatureLover123',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png',
    text: 'Lost in the beauty of nature. 🍃 #NatureIsHome #HikingAdventures',
  },
  {
    username: 'FoodieQueen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png',
    text: 'Indulging in some delicious sushi tonight! 🍣 #FoodieFriday #SushiLover',
  },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState<any[]>(dummyPosts);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e6f7ff', // Light blue background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2, // Add elevation for a subtle shadow on Android
    padding: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
});
