import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Provider as PaperProvider, Button } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function OrderDetail({ navigation, route }) {
  const { order } = route.params;

  // ตัวอย่างรายการอาหาร
  order.items = [
    { name: 'ข้าวผัดกุ้ง', qty: 1, price: 50 },
    { name: 'ต้มยำกุ้ง', qty: 2, price: 120 }, 
  ];

  const timeline = [
    { label: 'จัดส่งเรียบร้อย', time: order.timeDelivered, icon: 'home' },
    { label: 'กำลังเดินทางจัดส่ง', time: order.timePicked, icon: 'motorcycle' },
    { label: 'ทำอาหารสำเร็จ', time: order.timeReady, icon: 'restaurant' },
    { label: 'รับออเดอร์', time: order.timeReceived, icon: 'assignment-turned-in' },
  ];

  // แสดงปุ่ม action ตาม status
  const renderActionButton = (status) => {
    switch(status){
      case "รอการยืนยัน":
        return <Button mode="contained" style={styles.btnOr} labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('OrderHistory')}>ยืนยันออร์เดอร์</Button>;
      case "ยืนยันออร์เดอร์แล้ว":
        return <Button mode="contained" style={styles.btnOr} labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('OrderHistory')}>เริ่มทำอาหาร</Button>;
      case "กำลังทำอาหาร":
        return <Button mode="contained" style={styles.btnOr} labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('OrderHistory')}>ยืนยันทำอาหารเสร็จ</Button>;
      case "ทำอาหารเสร็จ":
        return <Text style={{ fontSize: 16, fontWeight: 'bold' ,color: '#f00', textAlign:'center'}}>รอไรเดอร์มารับอาหาร</Text>;
      case "ไรเดอร์มารับอาหาร":
        return <Text style={{ fontSize: 16, fontWeight: 'bold' ,color: '#f00', textAlign:'center'}}>กำลังจัดส่ง</Text>;
      case "กำลังจัดส่ง":
        return <Text style={{ fontSize: 16, fontWeight: 'bold' ,color: '#f00', textAlign:'center'}}>กำลังจัดส่ง</Text>;
      case "จัดส่งสำเร็จ":
        return <Text style={{ fontSize: 16, fontWeight: 'bold' ,color: 'green', textAlign:'center'}}>จัดส่งสำเร็จ</Text>;
      case "ยกเลิก":
        return <Button mode="contained" labelStyle={{color: '#f00'}} disabled>{status}</Button>;
      default:
        return null;
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container2}>
        {/* Header */}
        <View style={styles.container3}>
          <MaterialIcon
            name="arrow-back"
            size={28}
            color="#001a33"
            style={{ position: 'absolute', left: 16, padding: 8 }}
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1E874B' }}>
            ORD{order.id} {order.customerName}
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: '#f6fbff' }}
        >
          {/* Order Info */}
          <Card style={styles.cardOrderDes}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 , color: "#1E874B"}}>
              รายละเอียดออเดอร์
            </Text>
            <Text style={styles.blackColor}>เลขที่: {order.id}</Text>
            <Text style={styles.blackColor}>วันที่: {order.date}</Text>
            <Text style={styles.blackColor}>ราคา: {order.price} บาท</Text>
            <View style={{ marginTop: 8 }}>
              {renderActionButton(order.status)}
            </View>
          </Card>

          {/* รายการอาหาร */}
          <Card style={styles.cardOrderDes}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 , color: "#1E874B" }}>
              รายการอาหารที่สั่ง
            </Text>
            {order.items.map((item, index) => (
              <View
                key={index}
                style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}
              >
                <Text style={styles.blackColor}>{item.name} x{item.qty}</Text>
                <Text style={styles.blackColor}>{item.price * item.qty} บาท</Text>
              </View>
            ))}
            <View 
              style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}
            >
              <Text style={styles.blackColor}>ค่าจัดส่ง</Text>
              <Text style={styles.blackColor}>40 บาท</Text>
            </View> 
          </Card>

          {/* Timeline */}
          <View style={{ marginVertical: 16, paddingLeft: 16 }}>
            {timeline.map((step, index) => (
              <View key={index} style={{ flexDirection: 'row', marginBottom: 24 }}>
                {/* จุดและเส้น */}
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      backgroundColor: '#1E874B',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MaterialIcon name={step.icon} size={16} color="#fff" />
                  </View>
                  {index !== timeline.length - 1 && (
                    <View
                      style={{
                        width: 2,
                        height: 50,
                        backgroundColor: '#1E874B',
                        marginTop: 4,
                      }}
                    />
                  )}
                </View>

                {/* ข้อความ */}
                <View style={{ marginLeft: 16 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' ,color: '#000'}}>{step.label}</Text>
                  <Text style={{ color: '#555', marginTop: 4 }}>{step.time || '11:39'}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
