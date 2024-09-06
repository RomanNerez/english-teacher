import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function RegisterScreen() {
    return (
        <View style={styles.container}>
          <Text>Регистрация</Text>
          <Link href="/login">Вход</Link>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});