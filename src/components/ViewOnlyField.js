import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {appStyles} from '../utils/styles';

const ViewOnlyField = ({theme, icon, label, value}) => {
  const {colors} = theme;
  return (
    <View style={styles.container}>
      <Icon name="map" size={20} color={colors.orange} />
      <View style={styles.description}>
        <Text style={[styles.label, {color: colors.white}]}>{label}</Text>
        <Text style={[styles.value, {color: colors.white}]}>{value}</Text>
      </View>
    </View>
  );
};

export default withTheme(ViewOnlyField);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  label: {fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize'},
  value: {fontSize: 12, textTransform: 'capitalize'},
  description: {marginLeft: 10},
});
