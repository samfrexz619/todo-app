import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'



const TodoItem = ({todo, deleteTodo}) => {
  return ( 
    <TouchableOpacity onPress={()=> deleteTodo(todo.id)}>
      <View style={styles.item}>
        <MaterialIcons 
          name="delete"  
          size={18} 
          color={'#00658b'}
        />
        <Text style={styles.textItem}>{todo.text}</Text>
      </View>
    </TouchableOpacity>
   );
}


const styles = StyleSheet.create({
  item: {
    color: '#00658b',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 13,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#bbb',
    flexDirection: 'row',
    gap: 10
  },
  textItem: {
    fontSize: 16,
    textTransform: 'capitalize',
  }
})
export default TodoItem;