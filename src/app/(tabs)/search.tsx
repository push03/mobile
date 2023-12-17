import { Button, FlatList, TextInput, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import User from '../../models/User';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<User>>([]);
   
  // Function to handle the search button press
  const handleSearch = () => {
    // Implement search logic here
    const results = performSearch(searchQuery);
    setSearchResults(results);
  };

  // Dummy function for search (replace with your actual search logic)
  const performSearch = (query: string): Array<User> => {
    // Implement search logic here
    // For now, let's return some dummy search results
    return [
      { UserName: 'User1', Password: 'test' },
      { UserName: 'User2', Password: 'test' },
    ];
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for users"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        style={styles.flatList}
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.username}>{item.UserName}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  flatList: {
    marginTop: 12,
  },
  userContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});