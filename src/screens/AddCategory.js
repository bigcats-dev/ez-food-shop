import React from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, Button, TextInput, Provider as PaperProvider, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import DropDown from 'react-native-paper-dropdown';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/style';  
import Modal from 'react-native-modal';  
 
export default function AddCategory({ navigation }) {
  const [namecategory, setNamecategory] = React.useState('');  
  const [businessType, setBusinessType] = React.useState('ตลอดช่วงที่เปิดร้าน');
  const [isModalVisible, setModalVisible] = React.useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  
 
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
            เพิ่มหมวดหมู่
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
              ชื่อหมวดหมู่ <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="ระบุชื่อหมวดหมู่"
              value={namecategory}
              onChangeText={setNamecategory}
              mode="flat"
              underlineColor="#1E874B"
              activeUnderlineColor="#1E874B"
              style={[styles.input]}
            />   
          </View>
          
            <Text style={styles.label}>
              เวลาที่จำหน่าย <Text style={styles.required}>*</Text>
            </Text>
            <Button
              mode="text"
              onPress={openModal}
              style={{ alignSelf: 'flex-start' }}
              labelStyle={{
                color: '#000',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
            >
              {businessType}
            </Button>

       
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
              {/* แถบลากปิด */}
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

              <Text style={styles.title}>เวลาที่จำหน่าย</Text>

              {/* ✅ ใช้ RadioButton.Group */}
              <RadioButton.Group
                onValueChange={(value) => {
                  setBusinessType(value);
                  closeModal();  
                }}
                value={businessType}
              > 
                    <RadioButton.Item
                      label="ตลอดช่วงที่เปิดร้าน"
                      value="ตลอดช่วงที่เปิดร้าน"
                      color="#1E874B"
                      labelStyle={{ color: '#000', fontSize: 16 }}  
                    />
                    <RadioButton.Item
                      label="วันปกติ"
                      value="วันปกติ"
                      color="#1E874B"
                      labelStyle={{ color: '#000', fontSize: 16 }}
                    />
                    <RadioButton.Item
                      label="วันเสาร์ อาทิตย์"
                      value="วันเสาร์ อาทิตย์"
                      color="#1E874B"
                      labelStyle={{ color: '#000', fontSize: 16 }}
                    /> 
                    <TouchableOpacity
                      style={{ marginTop: 20,paddingBottom:100 }}
                      onPress={() => {
                        closeModal();
                        navigation.navigate("AddBusinessTime");  
                      }}
                    >
                          

                      <Text
                        style={{
                          color: "#1E874B",
                          fontSize: 16,
                          textDecorationLine: "underline",
                          textAlign: "left",
                        }}
                      >
                        เพิ่มเวลาที่จำหน่าย
                      </Text>
                    </TouchableOpacity>

              </RadioButton.Group>
                
            </View>
          </Modal>


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
