import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyles} from '../../utils/styles';

const Header = ({theme, active, navigation}) => {
  const {colors} = theme;

  const activeCircleStyle = {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: colors.purple,
  };
  const inActiveCircleStyle = {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.lightGray,
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.white}]}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          disabled={active === 'first'}>
          <Icon name="chevron-left" size={40} color={colors.purple} />
        </TouchableOpacity>
        <View style={appStyles.centerAlignment}>
          <Icon name="snapchat" size={30} color={colors.purple} />
          <Text style={[styles.snapLabel, {color: colors.purple}]}>
            SNAP AD
          </Text>
        </View>

        <View style={appStyles.row}>
          <View style={appStyles.centerAlignment}>
            <View
              style={
                active === 'first' ? activeCircleStyle : inActiveCircleStyle
              }>
              <Text
                style={{
                  color: active === 'first' ? colors.white : colors.lightGray,
                }}>
                1
              </Text>
            </View>
            <Text
              style={[
                styles.pageName,
                {color: active === 'first' ? colors.purple : colors.lightGray},
              ]}>
              Details
            </Text>
          </View>
          <Icon name="minus" size={30} color={colors.lightGray} />
          <View style={appStyles.centerAlignment}>
            <View
              style={
                active === 'second' ? activeCircleStyle : inActiveCircleStyle
              }>
              <Text
                style={{
                  color: active === 'second' ? colors.white : colors.lightGray,
                }}>
                2
              </Text>
            </View>

            <Text
              style={[
                styles.pageName,
                {color: active === 'second' ? colors.purple : colors.lightGray},
              ]}>
              Compose
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Header);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  snapLabel: {fontWeight: 'bold'},
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inActiveCircle: {
    borderWidth: 1,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  pageName: {fontSize: 10},
});
