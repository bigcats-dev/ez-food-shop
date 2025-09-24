import React, { useState } from 'react'; 
import { View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { Text, TextInput, PaperProvider, Card  } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function OrderHistory({ navigation }) { 
  const [search, setSearch] = useState('');

  const orders = [
    { id: "ORD001", nameuser: "สมชาย ใจดี", restaurant: "https://www.iconpacks.net/icons/free-icons-8/free-pending-yellow-sandclock-icon-27536-thumb.png", date: "2025-09-22 14:30", price: 350, status: "รอการยืนยัน" },
    { id: "ORD002", nameuser: "สุมิตรา แซ่ลิ้ม", restaurant: "https://cdn-icons-png.flaticon.com/512/3246/3246626.png", date: "2025-09-20 12:15", price: 220, status: "ยืนยันออร์เดอร์แล้ว" },
    { id: "ORD003", nameuser: "ปรเมศวร์ ชัยชนะ", restaurant: "https://cdn-icons-gif.flaticon.com/6449/6449671.gif", date: "2025-09-18 19:00", price: 540, status: "กำลังทำอาหาร" },
    { id: "ORD004", nameuser: "นันทิยา ศรีสุข", restaurant: "https://png.pngtree.com/png-vector/20250831/ourmid/pngtree-order-success-icon-with-a-check-mark-over-fast-food-symbol-vector-png-image_17346600.webp", date: "2025-09-17 11:45", price: 180, status: "ทำอาหารเสร็จ" },
    { id: "ORD005", nameuser: "ธนกร พงษ์พิพัฒน์", restaurant: "https://cdn-icons-png.flaticon.com/512/10351/10351875.png", date: "2025-09-15 09:20", price: 750, status: "ไรเดอร์มารับอาหาร" },
    { id: "ORD006", nameuser: "วิภาวี แสงทอง", restaurant: "https://cdn-icons-png.flaticon.com/512/7541/7541708.png", date: "2025-09-13 20:10", price: 430, status: "กำลังจัดส่ง" },
    { id: "ORD007", nameuser: "กิตติพงษ์ เจริญผล", restaurant: "https://img.icons8.com/ios11/512/40C057/ok.png", date: "2025-09-12 16:00", price: 310, status: "จัดส่งสำเร็จ" },
    { id: "ORD008", nameuser: "พิมพ์มาดา สวัสดิ์วงศ์", restaurant: "https://cdn-icons-png.freepik.com/512/7080/7080047.png", date: "2025-09-10 13:05", price: 500, status: "ยกเลิก" },
  ]; 

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status){
      case "รอการยืนยัน": return "#FFA500"; // ส้ม
      case "ยืนยันออร์เดอร์แล้ว": return "#1E90FF"; // ฟ้า
      case "กำลังทำอาหาร": return "#FF8C00"; // สีเข้มส้ม
      case "ทำอาหารเสร็จ": return "#32CD32"; // เขียวอ่อน
      case "ไรเดอร์มารับอาหาร": return "#00CED1"; // สีฟ้าอ่อน
      case "กำลังจัดส่ง": return "#8A2BE2"; // ม่วง
      case "จัดส่งสำเร็จ": return "#228B22"; // เขียวเข้ม
      case "ยกเลิก": return "#FF0000"; // แดง
      default: return "#000"; 
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrderDetail", { order: item })}
    >
      <Card style={styles.cardOrder}>
        <View style={styles.viewInOrder}> 
          <Image
            source={{ uri: item.restaurant }}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 12 }}
          />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 , color: "#000" }}>
              เลขที่: {item.id} : {item.nameuser}
            </Text>
            <Text style={{ color: "gray" }}>{item.date}</Text>
            <Text style={{ marginTop: 4 , color: "#000" }}>ราคา: {item.price} บาท</Text>
            <Text style={{ color: getStatusColor(item.status) }}>
              สถานะ: {item.status}
            </Text>
          </View>
          <MaterialIcon name="chevron-right" size={28} color="#999" />
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>
      <View style={styles.container2}>
        {/* Header */}
        <View style={[styles.container3, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 8 }}>
              <MaterialIcon name="arrow-back" size={28} color="#001a33" />
            </TouchableOpacity>

            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#001a33' }}>
              ประวัติ Order
            </Text>

            <TouchableOpacity onPress={() => console.log("กด Filter")} style={{ padding: 8 }}>
              <MaterialIcon name="filter-list" size={28} color="#001a33" />
            </TouchableOpacity>
        </View>

        {/* Search Box */}
        <View style={{ paddingHorizontal: 10, marginVertical: 8 }}>
          <TextInput 
            placeholder="ค้นหาเลขที่ Order"
            value={search}
            onChangeText={text => setSearch(text)}
            left={<TextInput.Icon icon="magnify" />} 
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: '#f6fbff' }}
        >
          <FlatList
            data={filteredOrders}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
