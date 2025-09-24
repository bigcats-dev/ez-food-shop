import React from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, Button, TextInput, Provider as PaperProvider, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import DropDown from 'react-native-paper-dropdown';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/style'; 

const CATEGORY_OPTIONS = [
  { label: 'ก๋วยเตี๋ยว', value: 'main' },
  { label: 'ขนมหวาน', value: 'dessert' },
  { label: 'เครื่องดื่ม', value: 'drink' },
];

export default function AddMenu({ navigation }) {
  const [nameFood, setNameFood] = React.useState(''); 
  const [description, setDescription] = React.useState('');
  const [delivery, setDelivery] = React.useState(true);
  const [category, setCategory] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);  
  const [images, setImages] = React.useState([]);
  const [price, setPrice] = React.useState(''); 
  
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('กรุณาอนุญาตให้เข้าถึงรูปภาพ');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets.slice(0, 4)]); // จำกัด 4 รูป
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container2}>
        {/* Header */}
        <View style={styles.container3}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ShopMenu')}
            style={{ position: 'absolute', left: 16, padding: 8 }}
          >
            <Icon name="arrow-back" size={28} color="#001a33" />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#001a33' }}>
            เพิ่มรายการอาหาร
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ชื่ออาหาร */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>
              ชื่ออาหาร <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="ระบุชื่ออาหาร"
              value={nameFood}
              onChangeText={setNameFood}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            />   
          </View>

          {/* รูปสินค้า */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>รูปสินค้า</Text>
            <TouchableOpacity
              onPress={pickImage}
              style={{
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: '#aaa',
                borderRadius: 8,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <Icon name="add-photo-alternate" size={32} color="#888" />
              <Text>สูงสุด 4 รูป (ไม่เกิน 2MB)</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}>
              {images.map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img.uri }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                />
              ))}
            </View>
          </View>

          {/* คำอธิบาย */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>คำอธิบาย</Text>
            <TextInput
              placeholder="กรอกรายละเอียดเพิ่มเติม"
              value={description}
              onChangeText={setDescription}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              multiline    
              numberOfLines={5}  
              style={[styles.input, { textAlignVertical: 'top' }]}  
            />
          </View>

          {/* ใช้กับคำสั่งซื้อ */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>
              ใช้กับคำสั่งซื้อ <Text style={styles.required}>*</Text>
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Checkbox
                status={delivery ? 'checked' : 'unchecked'}
                onPress={() => setDelivery(!delivery)}
                color="#1E874B"   
              />
              <Text style={{ color: 'black' }}>จัดส่ง</Text>  
            </View>
          </View>

          {/* หมวดหมู่ */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>
              หมวดหมู่ <Text style={styles.required}>*</Text>
            </Text>
            {/* <DropDown
              label="เลือกหมวดหมู่"
              mode="outlined"
              value={category}
              setValue={setCategory}
              list={CATEGORY_OPTIONS}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
            /> */}
          </View>
          {/* ชื่ออาหาร */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>
              ราคา <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="ระบุราคา"
              value={price}
              onChangeText={setPrice}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            />   
          </View>

          

          {/* ปุ่ม */}
          <Button
            mode="contained"
            onPress={() => navigation.navigate('ShopMenu')}
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
