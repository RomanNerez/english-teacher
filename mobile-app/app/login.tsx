import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function LoginScreen() {
    return (
        <View style={styles.container}>
          <Text>Вход</Text>
          <Link href="/register">Регистрация</Link>
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