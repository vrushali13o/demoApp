import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({name, onPress, theme}) => {
  const {colors} = theme;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, {backgroundColor: colors.orange}]}>
      <Icon name={name} size={40} color={colors.white} />
    </TouchableOpacity>
  );
};

export default withTheme(IconButton);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
