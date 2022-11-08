import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContainButton = props => {
  const {colors} = props.theme;
  return (
    <Button
      {...props}
      containerStyle={styles.containerStyle}
      buttonStyle={[styles.buttonStyle, {backgroundColor: colors.orange}]}
      icon={() => {
        return props.icon ? (
          <Icon name={props.icon} size={25} color={colors.white} />
        ) : null;
      }}
    />
  );
};

export default withTheme(ContainButton);

const styles = StyleSheet.create({
  containerStyle: {borderRadius: 25},
  buttonStyle: {paddingVertical: 12},
});
