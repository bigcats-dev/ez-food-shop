import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import styles from '../styles/style';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.title}>เข้าสู่ระบบร้านค้า</Text>

        <Text style={styles.label}>
          อีเมล <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          placeholder="เช่น name@email.com"
          value={email}
          onChangeText={setEmail}
          mode="flat"
          underlineColor="#1E874B"
          activeUnderlineColor="#1E874B"
          style={[styles.input, { borderBottomWidth: 1, borderBottomColor: '#1E874B' }]}

        />

        <Text style={styles.label}>
          รหัสผ่าน <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          placeholder="กรอกรหัสผ่าน"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="flat"
          underlineColor="#1E874B"
          activeUnderlineColor="#1E874B"
            style={[styles.input, { borderBottomWidth: 1, borderBottomColor: '#1E874B' }]}

        />

      </View>
 
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}   
        labelStyle={{ fontSize: 16, color: "#FFFFFF" }}
      >
        เข้าสู่ระบบ
      </Button>
    </View>
  );
}
 