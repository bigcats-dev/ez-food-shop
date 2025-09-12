import React from 'react';
import { IconButton } from 'react-native-paper';

export default function ThemeSwitcher({ isDark, onToggle }) {
  return (
    <IconButton
      icon={isDark ? 'weather-sunny' : 'moon-waning-crescent'}
      size={24}
      onPress={onToggle}
    />
  );
}
