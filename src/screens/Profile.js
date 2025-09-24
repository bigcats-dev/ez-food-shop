import React from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, Button, TextInput, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import * as ImagePicker from 'expo-image-picker';  
import styles from '../styles/style'; 
import Modal from 'react-native-modal';  

 

export default function Profile({ navigation }) {
  const [ShopName, setShopName] = React.useState('');
  const [AddressName, setAddressName] = React.useState('');
  const [MapName, setMapName] = React.useState('');
  const [DesName, setDesName] = React.useState('');
  const [DesNameShop, setDesNameShop] = React.useState('');
  const [ContactName, setContactName] = React.useState('');
  const [shopImage, setShopImg] = React.useState(null); // ✅ state สำหรับเก็บรูป

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
      setShopImg(result.assets[0].uri);
    }
  };
  const [businessType, setBusinessType] = React.useState('ธุรกิจส่วนตัว');
  const [isModalVisible, setModalVisible] = React.useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);


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
            โปรไฟล์ร้านค้า
          </Text>
        </View>
        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 20 }}>

            
            <Modal
              isVisible={isModalVisible}
              onSwipeComplete={closeModal}
              swipeDirection="down"
              onBackdropPress={closeModal}
              style={{ justifyContent: 'flex-end', margin: 0 }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: 20,
                }}
              >
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                  <View
                    style={{
                      width: 40,
                      height: 4,
                      backgroundColor: '#ccc',
                      borderRadius: 2,
                    }}
                  />
                </View>

                <Text style={styles.title}>
                  เลือกประเภทธุรกิจ
                </Text>

                {['ธุรกิจส่วนตัว', 'ห้างหุ้นส่วนจำกัด', 'บริษัท'].map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={{
                      paddingVertical: 12,
                      borderBottomWidth: 1,
                      borderBottomColor: '#eee',
                    }}
                    onPress={() => {
                      setBusinessType(type);
                      closeModal();
                    }}
                  >
                    <Text style={{ fontSize: 16, color: '#000' }}>{type}</Text>
                  </TouchableOpacity>
                ))}


              </View>
            </Modal>

            {/* ชื่อเจ้าของบัญชี */}
            <Text style={styles.label}>
              ชื่อเจ้าของบัญชี <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="กรอก ชื่อเจ้าของบัญชี"
              value={ShopName}
              onChangeText={setShopName}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            />
            <Text style={styles.label}>
              ชื่ออาคาร/ถนน * <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="กรอก ชื่ออาคาร/ถนน/เลขที่"
              value={AddressName}
              onChangeText={setAddressName}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            /> 
            {/* ที่ตั้งร้าน */}
            <Text style={styles.label}>
              ที่ตั้งร้านค้า <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="เลือกหมุดที่ตั้งร้านค้า"
              value={MapName}
              onChangeText={setMapName}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
              left={<TextInput.Icon icon="map-marker" color="#1E874B" />}
            />
  
            {/* รายละเอียด */}
            <Text style={styles.label}>
              รายละเอียดร้านค้าเพิ่มเติม <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="เช่น ข้าง BTS บางนา ประตูทางออก 4"
              value={DesName}
              onChangeText={setDesName}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            /> 
            {/* ชื่อผู้ติดต่อ */}
            <Text style={styles.label}>
              ชื่อผู้ติดต่อ <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="กรอก ชื่อผู้ติดต่อ"
              value={ContactName}
              onChangeText={setContactName}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            />
  
            {/* ปุ่มเลือกประเภทธุรกิจ */}
            <Text style={styles.label}>
              ประเภทธุรกิจ <Text style={styles.required}>*</Text>
            </Text>
            <Button
              mode="text"
              onPress={openModal}
              style={{ alignSelf: 'flex-start' }}
              labelStyle={{ color: '#000', fontSize: 16, textDecorationLine: 'underline' }}
            >
              {businessType}
            </Button>
            
            <Text style={styles.label}>
              แบนเนอร์ร้านค้า<Text style={styles.required}>*</Text>
            </Text>
            <View style={{ width: '100%', marginTop: 10 }}>
              <Button
                mode="outlined"
                icon="upload"
                onPress={pickImage}
                style={styles.BtnUpload}
                labelStyle={styles.buttonLabel2}
              >
                {shopImage ? 'เปลี่ยนรูป' : 'อัปโหลดแบนเนอร์ร้านค้า'}
              </Button>
 

            </View> 
            
            <Text style={styles.label}>
              รูปภาพรายการ <Text style={styles.required}>*</Text>
            </Text>
            <View style={{ width: '100%', marginTop: 10 }}>
              <Button
                mode="outlined"
                icon="upload"
                onPress={pickImage}
                style={styles.BtnUpload}
                labelStyle={styles.buttonLabel2}
              >
                {shopImage ? 'เปลี่ยนรูป' : 'อัปโหลดรูปภาพรายการ'}
              </Button>
 

            </View> 
          </View>
          <Text style={styles.label}>
            คำอธิบายร้าน <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="อธิบายร้านของคุณ"
            value={DesName}
            onChangeText={setDesName}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
            numberOfLines={4} 
          /> 
 
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
