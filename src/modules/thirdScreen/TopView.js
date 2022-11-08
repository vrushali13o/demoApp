import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {withTheme, Text} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {appStyles} from '../../utils/styles';

const TopView = ({theme, data}) => {
  const {colors} = theme;

  const total = data.data?.campaign?.adsquads?.lifetime_budget;
  const spend = data.data?.campaign?.metrics?.spend;
  const progress = spend / total;

  return (
    <>
      <Text style={[styles.label, {color: colors.white}]}>AD PERFORMANCE</Text>
      <View style={styles.progressBarContainer}>
        <Progress.Circle
          size={150}
          indeterminate={false}
          borderWidth={0}
          animated={false}
          progress={progress}
          thickness={9}
          unfilledColor={colors.input}
          color={colors.warning}
          showsText={true}
          strokeCap={'round'}
          formatText={() => (
            <View
              style={[
                appStyles.row,
                appStyles.centerAlignment,
                styles.container,
              ]}>
              <View style={[styles.icon, {borderColor: colors.white}]}>
                <Icon name="dollar-sign" color={colors.white} />
              </View>
              <View>
                <Text style={{color: colors.white}}>SPEND</Text>
                <Text style={[styles.price, {color: colors.error}]}>
                  ${data.data?.campaign?.metrics?.spend}
                </Text>
                <Text style={[styles.price, {color: colors.error}]}>
                  out of $ ${data.data?.campaign?.adsquads?.lifetime_budget}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default withTheme(TopView);

const styles = StyleSheet.create({
  container: {padding: 10},
  label: {fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase'},
  progressBarContainer: {marginTop: 20, alignItems: 'center'},
  icon: {
    padding: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 20,
    marginRight: 5,
  },
  price: {fontSize: 12, fontWeight: 'bold'},
});
