import React from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, Button, TextInput, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDown from 'react-native-paper-dropdown';  
import * as ImagePicker from 'expo-image-picker';  
import styles from '../styles/style'; 

const OPTIONS = [
  { label: 'กสิกรไทย (KBank)', value: 'kbank' },
  { label: 'ไทยพาณิชย์ (SCB)', value: 'scb' },
  { label: 'กรุงเทพ (BBL)', value: 'bbl' },
  { label: 'กรุงไทย (KTB)', value: 'ktb' },
  { label: 'ทหารไทยธนชาต (TTB)', value: 'ttb' },
  { label: 'ออมสิน (GSB)', value: 'gsb' },
  { label: 'กรุงศรีอยุธยา (BAY)', value: 'bay' },
];

export default function BankAccount({ navigation }) {
  const [BankAccountName, setBankAccountName] = React.useState('');
  const [NumberBank, setNumberBank] = React.useState('');
  const [BankName, setBankName] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [bankImage, setBankImage] = React.useState(null);  

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('กรุณาอนุญาตให้เข้าถึงรูปภาพ');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setBankImage(result.assets[0].uri);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container2}>
        {/* Header */}
        <View style={styles.container3}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{ position: 'absolute', left: 16, padding: 8 }}
          >
            <Icon name="arrow-back" size={28} color="#001a33" />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#001a33' }}>
            Bank Account
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 20 }}>
            {/* ชื่อเจ้าของบัญชี */}
            <Text style={styles.label}>
              ชื่อเจ้าของบัญชี <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="กรอก ชื่อเจ้าของบัญชี"
              value={BankAccountName}
              onChangeText={setBankAccountName}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            />

            {/* Dropdown ธนาคาร */}
            <Text style={styles.label}>
              ธนาคาร <Text style={styles.required}>*</Text>
            </Text>
            {/* ถ้าจะแก้ dropdown ให้ uncomment โค้ดด้านล่างได้ */}
            {/* 
            <DropDown
              label="เลือกธนาคาร"
              mode="flat"
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={BankName}
              setValue={setBankName}
              list={OPTIONS}
              inputProps={{
                style: {
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                },
                underlineColor: '#1E874B',
                activeUnderlineColor: '#1E874B',
              }}
            /> 
            */}

            {/* เลขที่บัญชี */}
            <Text style={styles.label}>
              เลขที่บัญชี <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="กรอกเลขที่บัญชี"
              value={NumberBank}
              onChangeText={setNumberBank}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
              keyboardType="numeric"
            />

            {/* อัปโหลดเอกสารบัญชีธนาคาร */}
            <Text style={styles.label}>
              อัปโหลดรูปเอกสารบัญชีธนาคาร <Text style={styles.required}>*</Text>
            </Text>
            {bankImage && (
              <Image
                source={{ uri: bankImage }}
                style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 10 }}
              />
            )}
            <View style={{ width: '100%', marginTop: 10 }}>
              <Button
                mode="outlined"
                icon="upload"
                onPress={pickImage}
                style={styles.BtnUpload}
                labelStyle={styles.buttonLabel2}
              >
                {bankImage ? 'เปลี่ยนรูป' : 'อัปโหลดรูปบัญชี'}
              </Button>

              <Text style={styles.TextMal}>
                รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 5MB
              </Text>

              <Image
                  source={require('../../assets/bank_ex.png')}
                  style={styles.ImgBank}
              /> 

               <Text style={styles.TextBankDes}>
                1. สามารถมองเห็นรายละเอียดทั้งตัวเลขและตัวอักษรได้อย่างครบถ้วนและชัดเจน
              </Text>
              <Text style={styles.TextBankDes}>
                2. ชื่อบัญชีต้องตรงกับชื่อเจ้าของร้าน/ผู้เสียภาษี
              </Text>

            </View>
          </View>
 
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Home')}
            style={[styles.button, { marginTop: 40 }]}
            labelStyle={styles.buttonLabel}
          >
            ยืนยัน
          </Button>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
