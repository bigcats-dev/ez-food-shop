import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, Provider as PaperProvider, SegmentedButtons, Switch, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function AddBusinessTime({ navigation }) {
  const [tab, setTab] = React.useState("normal");

  const [days, setDays] = React.useState({
    monday: { active: false, slots: [] },
    tuesday: { active: false, slots: [] },
    wednesday: { active: false, slots: [] },
    thursday: { active: false, slots: [] },
    friday: { active: false, slots: [] },
    saturday: { active: false, slots: [] },
    sunday: { active: false, slots: [] },
  });

  const toggleDay = (key) => {
    setDays((prev) => ({
      ...prev,
      [key]: { ...prev[key], active: !prev[key].active },
    }));
  };

  const addSlot = (key) => {
    setDays((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        slots: [...prev[key].slots, { from: "10:00", to: "13:00" }],
      },
    }));
  };

  const removeSlot = (key, index) => {
    setDays((prev) => {
      const slots = [...prev[key].slots];
      slots.splice(index, 1);
      return { ...prev, [key]: { ...prev[key], slots } };
    });
  };

  const renderDay = (label, key) => {
    const { active, slots } = days[key];

    return (
      <View style={styles.dayBlock} key={key}>
        {/* Header */}
        <View style={styles.row}>
          <View>
            <Text style={styles.dayText}>{label}</Text>
            <Text style={styles.closeText}>{active ? "เปิด" : "ปิด"}</Text>
          </View>
          <Switch
            value={active}
            onValueChange={() => toggleDay(key)}
            color="#1E874B"
          />
        </View>

        {/* Time Slots */}
        {active && (
          <View style={{ marginLeft: 20, marginTop: 8 }}>
            {slots.map((slot, idx) => (
              <View style={styles.slotRow} key={idx}>
                <Button mode="outlined" style={styles.timeButton} labelStyle={{ color: "#000" }} >
                  {slot.from}
                </Button>
                <Text style={{ marginHorizontal: 8 }}>ถึง</Text>
                <Button mode="outlined" style={styles.timeButton} labelStyle={{ color: "#000" }} >
                  {slot.to}
                </Button>

                <IconButton
                  icon="delete"
                  onPress={() => removeSlot(key, idx)}
                />
              </View>
            ))}

            {/* Add slot button */}
            <Button
              icon="plus"
              onPress={() => addSlot(key)}
              style={styles.addBtn} 
              labelStyle={{ color: "#000" }}
            >
              เพิ่มเวลา
            </Button>
          </View>
        )}
      </View>
    );
  };

  return (
    <PaperProvider>
      <View style={styles.container2}>
        {/* Header */}
        <View style={styles.container3}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCategory')}
            style={{ position: 'absolute', left: 16, padding: 8 }}
          >
            <Icon name="arrow-back" size={28} color="#001a33" />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#001a33' }}>
            เพิ่มเวลาที่จำหน่าย
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 10 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Tabs */}
            <SegmentedButtons
              value={tab}
              onValueChange={setTab}
              buttons={[
                { value: "normal", label: "เวลาเปิดปกติ" },
                { value: "special", label: "เวลาพิเศษ" },
              ]}
              style={styles.tabs}
            />

            {/* Days List */}
            <View style={styles.container}>
              {renderDay("วันจันทร์", "monday")}
              {renderDay("วันอังคาร", "tuesday")}
              {renderDay("วันพุธ", "wednesday")}
              {renderDay("วันพฤหัสบดี", "thursday")}
              {renderDay("วันศุกร์", "friday")}
              {renderDay("วันเสาร์", "saturday")}
              {renderDay("วันอาทิตย์", "sunday")}
            </View>
          </View>

          {/* Save Button */}
          <Button
            mode="contained"
            onPress={() => navigation.navigate('ShopMenu')}
            style={[styles.button, { marginTop: 40 }]}
            labelStyle={styles.buttonLabel}
          >
            บันทึก
          </Button>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}
