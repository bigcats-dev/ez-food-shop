import React from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Text, Provider as PaperProvider, List, Switch, FAB , Modal  , Portal} from 'react-native-paper'; // ✅ import FAB
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function ShopMenu({ navigation }) {
  const [expanded1, setExpanded1] = React.useState(true);
  const menuPress1 = () => setExpanded1(!expanded1);

  const [expanded2, setExpanded2] = React.useState(true);
  const menuPress2 = () => setExpanded2(!expanded2);

  const [expanded3, setExpanded3] = React.useState(true);
  const menuPress3 = () => setExpanded3(!expanded3);

  // state ของ switch แต่ละเมนู
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(true);
  const [checked6, setChecked6] = React.useState(true);

  const [visible, setVisible] = React.useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

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
            เมนูร้าน
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 80 }} // ✅ เผื่อ space ไม่ให้ FAB บัง
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 20 }}>
            <List.Section>
              {/* เมนูก๋วยเตี๋ยว */}
              <List.Accordion
                title="เมนูก๋วยเตี๋ยว"
                titleStyle={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}
                style={{ backgroundColor: '#fff' }}
                expanded={expanded1}
                onPress={menuPress1}
              >
                <List.Item
                  title={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/m11.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>ก๋วยเตี๋ยวเนื้อตุ๋น</Text>
                        <Text style={{ fontSize: 14, color: '#f00' }}>ราคา 60 บาท</Text>
                      </View>
                    </View>
                  )}
                  right={() => (
                    <Switch value={checked1} onValueChange={() => setChecked1(!checked1)} color="green" />
                  )}
                  style={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                />

                <List.Item
                  title={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/m22.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>ก๋วยเตี๋ยวหมู</Text>
                        <Text style={{ fontSize: 14, color: '#f00' }}>ราคา 60 บาท</Text>
                      </View>
                    </View>
                  )}
                  right={() => (
                    <Switch value={checked2} onValueChange={() => setChecked2(!checked2)} color="green" />
                  )}
                  style={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                />
              </List.Accordion>

              {/* เครื่องดื่ม */}
              <List.Accordion
                title="เครื่องดื่ม"
                titleStyle={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}
                style={{ backgroundColor: '#fff' }}
                expanded={expanded2}
                onPress={menuPress2}
              >
                <List.Item
                  title={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/m201.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>ชาเย็น</Text>
                        <Text style={{ fontSize: 14, color: '#f00' }}>ราคา 25 บาท</Text>
                      </View>
                    </View>
                  )}
                  right={() => (
                    <Switch value={checked3} onValueChange={() => setChecked3(!checked3)} color="green" />
                  )}
                  style={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                />

                <List.Item
                  title={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/m202.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>น้ำเปล่า</Text>
                        <Text style={{ fontSize: 14, color: '#f00' }}>ราคา 10 บาท</Text>
                      </View>
                    </View>
                  )}
                  right={() => (
                    <Switch value={checked4} onValueChange={() => setChecked4(!checked4)} color="green" />
                  )}
                  style={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                />
              </List.Accordion>

              {/* ของหวาน */}
              <List.Accordion
                title="ของหวาน"
                titleStyle={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}
                style={{ backgroundColor: '#fff' }}
                expanded={expanded3}
                onPress={menuPress3}
              >
                <List.Item
                  title={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/m301.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>บัวลอย</Text>
                        <Text style={{ fontSize: 14, color: '#f00' }}>ราคา 10 บาท</Text>
                      </View>
                    </View>
                  )}
                  right={() => (
                    <Switch value={checked5} onValueChange={() => setChecked5(!checked5)} color="green" />
                  )}
                  style={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                />

                <List.Item
                  title={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../assets/m302.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
                      />
                      <View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>ขนมถ้วย</Text>
                        <Text style={{ fontSize: 14, color: '#f00' }}>ราคา 20 บาท</Text>
                      </View>
                    </View>
                  )}
                  right={() => (
                    <Switch value={checked6} onValueChange={() => setChecked6(!checked6)} color="green" />
                  )}
                  style={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                />
              </List.Accordion>
            </List.Section>
          </View>
        </ScrollView>

        {/* ✅ Floating Action Button */}
        <FAB
          icon="plus"
          label="เพิ่มเมนู"
          color="white"
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            backgroundColor: "green",
          }}
          onPress={openModal}
        />

        
        {/* Modal */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={closeModal}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: 20,
              marginHorizontal: 20,
              borderRadius: 12,
            }}
          >
 
            <List.Item
              title="เพิ่มรายการ"
              style={{ color: '#000' }}
              titleStyle={{ color: 'black' }}   
              left={(props) => <List.Icon {...props} icon="plus" color="black"  />} 
              onPress={() => navigation.navigate('AddMenu')}  
            />
            <List.Item
              title="เพิ่มหมวดหมู่"
              titleStyle={{ color: 'black' }}
              left={(props) => <List.Icon {...props} icon="folder-plus" color="black" />}
              onPress={() => navigation.navigate('AddCategory')}  
            />
            <List.Item
              title="เรียงใหม่"
              titleStyle={{ color: 'black' }}
              left={(props) => <List.Icon {...props} icon="sort" color="black" />}
              onPress={() => {
                closeModal();
                console.log("เรียงใหม่");
              }}
            />
            <List.Item
              title="เลือกหลายรายการ"
              titleStyle={{ color: 'black' }}
              left={(props) => <List.Icon {...props} icon="check" color="black" />}
              onPress={() => {
                closeModal();
                console.log("เลือกหลายรายการ");
              }}
            />
          </Modal>
        </Portal>


      </View>
    </PaperProvider>
  );
}
