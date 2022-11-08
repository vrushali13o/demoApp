import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

const FooterView = ({theme, data}) => {
  const {colors} = theme;

  const {webUrl} = useSelector(objctiveReducer => objctiveReducer);

  return webUrl ? (
    <View>
      <Text style={[styles.label, {color: colors.white}]}>ad destination</Text>
      <View style={[styles.container, {backgroundColor: colors.input}]}>
        <View style={styles.subContainer}>
          <Text style={[styles.link, {color: colors.white}]}>{webUrl}</Text>
          <Icon name="file" size={15} color={colors.white} />
        </View>
      </View>
    </View>
  ) : null;
};

export default withTheme(FooterView);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    flexShrink: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  label: {fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase'},
  link: {marginRight: 20},
});
