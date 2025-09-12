// src/components/MenuBar.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // เปลี่ยนเป็น MaterialCommunityIcons

export default function MenuBar({ title, onProfilePress, onMenuPress, notificationCount = 0 }) {
    return (
        <View
            style={styles.view}
        >
         
            <TouchableOpacity onPress={onMenuPress}>
                <Icon name="menu" size={28} color="#001a33" />
            </TouchableOpacity>

        
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#001a33' }}>
                {title}
            </Text>
 
            <TouchableOpacity onPress={onProfilePress} style={{ position: 'relative' }}>
                <Icon name="bell-outline" size={28} color="#001a33" />
                {notificationCount > 0 && (
                    <View
                        style={styles.viewBell}
                    >
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
                            {notificationCount}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}
