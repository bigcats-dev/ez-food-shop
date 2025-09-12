import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, Provider } from 'react-native-paper';
import styles from '../styles/style';
import Modal from 'react-native-modal';  

export default function MainRegister({ navigation }) {
  const [ShopName, setShopName] = React.useState('');
  const [AddressName, setAddressName] = React.useState('');
  const [MapName, setMapName] = React.useState('');
  const [DesName, setDesName] = React.useState('');
  const [ContactName, setContactName] = React.useState('');

 
  const [businessType, setBusinessType] = React.useState('ธุรกิจส่วนตัว');
  const [isModalVisible, setModalVisible] = React.useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>ลงทะเบียนร้านค้า</Text>

          {/* Modal Slide Up เลือกประเภทธุรกิจ */}
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

          {/* ชื่อร้านค้า */}
          <Text style={styles.label}>
            ชื่อร้านค้า <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="กรอก ชื่อร้านค้า"
            value={ShopName}
            onChangeText={setShopName}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />

          {/* ชื่ออาคาร */}
          <Text style={styles.label}>
            ชื่ออาคาร/ถนน <Text style={styles.required}>*</Text>
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
        </ScrollView>

        {/* ปุ่มยืนยัน */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={styles.button} 
          contentStyle={{ borderRadius: 100 }}
          labelStyle={styles.buttonLabel}
        >
          ยืนยัน
        </Button>
      </View>
    </Provider>
  );
}
