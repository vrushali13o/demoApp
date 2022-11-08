import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, withTheme} from 'react-native-elements';

const InputField = props => {
  const {colors} = props.theme;

  return (
    <Input
      {...props}
      containerStyle={[
        styles.containerStyle,
        {
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : colors.input,
        },
      ]}
      inputContainerStyle={[
        styles.inputContainerStyle,
        {
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : colors.transparent,
        },
      ]}
      inputStyle={[styles.inputStyle, {color: colors.white}]}
      labelStyle={{color: colors.white}}
    />
  );
};

export default withTheme(InputField);

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 0,
    paddingLeft: 25,
    height: 65,
    borderRadius: 25,
    marginBottom: 30,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    marginHorizontal: 0,
  },
  inputStyle: {padding: 0, fontSize: 16},
});
