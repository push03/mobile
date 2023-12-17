import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';

const dummyWorkoutTemplates = [
  { id: '1', name: 'Template 1', exercises: ['Exercise A', 'Exercise B', 'Exercise C'] },
  { id: '2', name: 'Template 2', exercises: ['Exercise X', 'Exercise Y', 'Exercise Z'] },
];

export default function WorkoutScreen() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [customExercises, setCustomExercises] = useState<string[]>([]);
  const [workoutName, setWorkoutName] = useState<string>('');

  useEffect(() => {
    // Fetch workout templates from data source
    // For now, using dummy data
    // replace this with actual logic to fetch templates
  }, []);

  const handleAddExercise = () => {
    setCustomExercises((prevExercises) => [...prevExercises, '']);
  };

  const handleExerciseChange = (index: number, value: string) => {
    setCustomExercises((prevExercises) => {
      const updatedExercises = [...prevExercises];
      updatedExercises[index] = value;
      return updatedExercises;
    });
  };

  const handleCreateWorkout = () => {
    // Implement logic to save the new workout to your data source or storage
    console.log('New Workout:', {
      name: workoutName,
      templateId: selectedTemplate,
      exercises: customExercises,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Workout Name"
        value={workoutName}
        onChangeText={(text) => setWorkoutName(text)}
      />

      <Text style={styles.subtitle}>Select a Workout Template:</Text>
      <FlatList
        style={styles.templateList}
        data={dummyWorkoutTemplates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.templateItem}>
            <Button
              title={item.name}
              onPress={() => setSelectedTemplate(item.id)}
              disabled={selectedTemplate === item.id}
            />
          </View>
        )}
      />

      <Text style={styles.subtitle}>Custom Exercises:</Text>
      <FlatList
        style={styles.customExerciseList}
        data={customExercises}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <TextInput
            style={styles.customExerciseInput}
            placeholder={`Exercise ${index + 1}`}
            value={item}
            onChangeText={(text) => handleExerciseChange(index, text)}
          />
        )}
      />
      <Button title="Add Exercise" onPress={handleAddExercise} />

      <Button title="Create Workout" onPress={handleCreateWorkout} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2, // Add elevation for a subtle shadow on Android
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  templateList: {
    marginBottom: 16,
  },
  templateItem: {
    marginBottom: 8,
  },
  customExerciseList: {
    marginBottom: 16,
  },
  customExerciseInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2, // Add elevation for a subtle shadow on Android
  },
  addButton: {
    marginBottom: 16,
  },
  createButton: {
    marginBottom: 16,
  },
});
