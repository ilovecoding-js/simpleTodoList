{/*  
  Bu uygulama 11-E Mert Akın tarafından demo olarak hazırlanmıştır. 
  Hazırlarken kullandığım kaynak: https://www.youtube.com/watch?v=00HFzh3w1B8 
*/}
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'
export default function App() {
  const[task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}

  return (
    <View style={styles.container}>
      {/* günlük yapılacaklar */}
      <View style={styles.taskWrapper}>
          
           <Text style={styles.sectionTitle}>Günlük İşler</Text>
          

        <View style={styles.items}>

        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <Task  text={item} />

              </TouchableOpacity>
            )

          })
        }

       
       
        </View>

      </View>

      {/* İş Ekleme Yeri */}
        <KeyboardAvoidingView
        behavior={Platform.OS ==="ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
       > 
        <TextInput style={styles.input} placeholder={'İş Yazınız'} value={task} onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

       </KeyboardAvoidingView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  taskWrapper: {
    padding: 80,
    paddingHorizontal: 20,

  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
items: {
  marginTop: 20,
},

writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
   
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {

},

});
