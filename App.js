import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme, darkTheme } from './src/theme';
import ThemeSwitcher from './src/components/ThemeSwitcher';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ChooseAuthScreen from './src/screens/ChooseAuthScreen';
import OtpScreen from './src/screens/OtpScreen';
import MainRegister from './src/screens/MainRegister';
import Profile from './src/screens/Profile';
import ShopMenu from './src/screens/ShopMenu';
import BankAccount from './src/screens/BankAccount';
import AddMenu from './src/screens/AddMenu';
import AddCategory from './src/screens/AddCategory';
import AddBusinessTime from './src/screens/AddBusinessTime';



const Stack = createNativeStackNavigator();


function SplashScreen({ navigation }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChooseAuth'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
        <Image
            source={require('./assets/icon.png')}
                style={{ width: 120, height: 120, borderRadius: 24 }}
                resizeMode="contain"
            />
        <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
}

export default function App() {
 

  return (
    <PaperProvider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChooseAuth">
            <Stack.Screen name="ChooseAuth" component={ChooseAuthScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'เข้าสู่ะบบ', }}  />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'สมัครใช้งาน' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={OtpScreen} />
            <Stack.Screen name="MainRegis" component={MainRegister} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="ShopMenu" component={ShopMenu} options={{ headerShown: false }} />
            <Stack.Screen name="AddMenu" component={AddMenu} options={{ headerShown: false }} />
            <Stack.Screen name="AddCategory" component={AddCategory} options={{ headerShown: false }} />
            <Stack.Screen name="AddBusinessTime" component={AddBusinessTime} options={{ headerShown: false }} />
            <Stack.Screen name="BankAccount" component={BankAccount} options={{ headerShown: false }} />
        </Stack.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E874B', 
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});
