import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyWorkouts = [
  { id: '1', date: '2023-01-01', duration: 30, caloriesBurned: 200 },
  { id: '2', date: '2023-01-02', duration: 45, caloriesBurned: 300 },
  { id: '3', date: '2023-01-03', duration: 60, caloriesBurned: 400 },
];

export default function HistoryScreen() {
  const [workoutHistory, setWorkoutHistory] = useState<
    Array<{ id: string; date: string; duration: number; caloriesBurned: number }>
  >([]);

  useEffect(() => {
    setWorkoutHistory(dummyWorkouts);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout History</Text>

      <FlatList
        style={styles.workoutList}
        data={workoutHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text style={styles.date}>Date: {item.date}</Text>
            <Text style={styles.detail}>Duration: {item.duration} minutes</Text>
            <Text style={styles.detail}>Calories Burned: {item.caloriesBurned}</Text>
            {/* Add more workout details or actions here */}
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
  workoutList: {
    marginTop: 8,
  },
  workoutItem: {
    padding: 12,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2, // Add elevation for a subtle shadow on Android
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
});
