import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import styles from '../styles/style';
import { useNavigation } from '@react-navigation/native';
import MenuBar from '../components/MenuBar';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => setMenuVisible(!isMenuVisible);

    return (
        <View style={{ flex: 1, backgroundColor: '#f6fbff' }}>
            {/* Menu Bar */}
 
            <MenuBar 
                title="ร้านของฉัน"
                onMenuPress={() => setMenuVisible(true)}
                onProfilePress={() => navigation.navigate('Notifications')}
                notificationCount={5}
            />

            {/* Main Content */}
            <ScrollView>
                <View style={{ paddingHorizontal: 20, gap: 16, marginTop: 20 }}>
                    {/* Card 1: โปรไฟล์ร้าน */}
                    <Card style={styles.card} onPress={() => navigation.navigate('Profile')}>
                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icon_menu1.png')}
                                style={{ width: 50, height: 50, marginRight: 16, borderRadius: 100 }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>โปรไฟล์ร้าน</Text>
                                <Text variant="bodySmall" style={{ color: '#777' }}>
                                    จัดการข้อมูลร้านค้า และรายละเอียดของคุณได้ที่นี่
                                </Text>
                                <Text style={{ color: '#e53935', marginTop: 6 }}>
                                    จัดการโปรไฟล์ร้านของคุณ
                                </Text>
                            </View>
                        </Card.Content>
                    </Card>

                    {/* Card 2: เมนูร้าน */}
                    <Card style={styles.card} onPress={() => navigation.navigate('ShopMenu')}>
                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icon_menu2.png')}
                                style={{ width: 50, height: 50, marginRight: 16, borderRadius: 100 }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>เมนูร้าน</Text>
                                <Text variant="bodySmall" style={{ color: '#777' }}>
                                    คุมเมนูให้อยู่หมัด จัดการง่ายในที่เดียว
                                </Text>
                                <Text style={{ color: '#e53935', marginTop: 6 }}>
                                    จัดการเมนู
                                </Text>
                            </View>
                        </Card.Content>
                    </Card>

                    {/* Card 3: ข้อมูลบัญชีธนาคาร */}
                    <Card style={styles.card} onPress={() => navigation.navigate('BankAccount')}>
                        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icon_menu3.png')}
                                style={{ width: 50, height: 50, marginRight: 16, borderRadius: 100 }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>ข้อมูลบัญชีธนาคาร</Text>
                                <Text variant="bodySmall" style={{ color: '#777' }}>
                                    จัดการ ข้อมูลบัญชีธนาคาร
                                </Text>
                                <Text style={{ color: '#e53935', marginTop: 6 }}>
                                    จัดการข้อมูลบัญชีธนาคาร
                                </Text>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>

            {/* Modal Slide Up Menu */}
            <Modal
                isVisible={isMenuVisible}
                onSwipeComplete={toggleMenu}
                swipeDirection="down"
                onBackdropPress={toggleMenu}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View style={{
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 20,
                    minHeight: 250
                }}>
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ width: 40, height: 4, backgroundColor: '#ccc', borderRadius: 2 }} />
                    </View>
 

                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
                        onPress={() => { toggleMenu(); navigation.navigate('HelpSupport'); }}
                    >
                        <Icon name="help-circle-outline" size={24} color="#001a33" />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>ความช่วยเหลือ และการสนับสนุน</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
                        onPress={() => { toggleMenu(); navigation.navigate('UserProfile'); }}
                    >
                        <Icon name="person" size={24} color="#001a33" />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>บัญชี</Text>
                    </TouchableOpacity>
 
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, marginTop: 10 }}
                        onPress={() => { toggleMenu(); navigation.navigate('ChooseAuth'); }}
                    >
                        <Icon name="logout" size={24} color="#e53935" />
                        <Text style={{ marginLeft: 10, fontSize: 16, color: '#e53935' }}>ออกจากระบบ</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
