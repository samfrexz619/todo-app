import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = ({ addItem, changeHandler, inputVal, setInputVal }) => {


  return ( 
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        // onEndEditing={clear()}
      />
      <Button
        title='add todo'
        onPress={()=> addItem(inputVal)}
        color='#00658B'
      />
    </View>
   );
}
 
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    // marginHorizontal: 16
  },
  form: {
    marginHorizontal: 16
  }
})
export default AddTodo;