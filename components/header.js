import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return ( 
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
   );
}
 
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: '#00658B',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default Header;