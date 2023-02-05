import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice[index, 1];
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        <View style={styles.items}>
          {/*Tasks section */}

          {
            taskItems.map((item, index) => {
              return ( <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                   <Task  text={item} />
              </TouchableOpacity>)
              
            } )
          }
          {/*<Task text={'Task 1'}/>
          <Task text={'Task 2'}/>*/}
        </View>

      </View>

      {/*Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeWrapper}
        >

          <TextInput style={styles.input} placeholder="write here" onChangeText={ text => setTask(text)}/>

          <TouchableOpacity onPress={ () => handleAddTask()}>
            <View style={styles.addWrapper}></View>

            <Text style={styles.addText}></Text>
          </TouchableOpacity>

      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    
  },
   taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
   },
   title: {
    fontSize: 24,
    fontWeight: 'bold'
   },
   items: {
    marginTop: 30,
   },
   writeWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

   },
   input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "black",
    borderWidth: 1

   },
   addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1
   },
   addText: {

   }


});
