import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {withTheme, Text} from 'react-native-elements';
import {appStyles} from '../../utils/styles';
import TopView from './TopView';
import {getData} from '../../utils/api';
import MainView from './MainView';
import FooterView from './FooterView';
import {useSelector} from 'react-redux';
import {CAMPAIGN_DETAILS, SERVER_URL} from '../../utils/apiUtilities';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ThirdScreen = ({theme, navigation}) => {
  const {colors} = theme;
  const [information, setInformation] = useState(null);

  const getInformation = async () => {
    try {
      const {data} = await getData(`${SERVER_URL}${CAMPAIGN_DETAILS}`);
      setInformation(data);
      console.log(JSON.stringify(data, undefined, 4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!information) {
      getInformation()
        .then(() => {})
        .catch(() => {});
    }

    navigation.setOptions({
      headerShown: true,
      headerLeftContainerStyle: styles.leftContainer,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color={colors.white} />
        </TouchableOpacity>
      ),
      headerStyle: {backgroundColor: colors.purple, elevation: 0},
      headerTitle: () => (
        <View>
          <Text style={{color: colors.white}}>
            <Icon name="snapchat" size={20} color={colors.white} />
            {'   '}
            {information?.data?.name}
          </Text>
          <Text style={{color: colors.orange}}>
            <Icon name="circle-medium" size={20} color={colors.orange} />{' '}
            Campaign Ended
          </Text>
        </View>
      ),
    });
  }, [information]);
  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.purple}]}>
      <StatusBar backgroundColor={colors.purple} barStyle="light-content" />
      <View style={styles.container}>
        {information ? (
          <>
            <TopView data={information} />
            <MainView data={information} />
            <FooterView data={information} />
          </>
        ) : (
          <ActivityIndicator color={colors.orange} size={30} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default withTheme(ThirdScreen);

const styles = StyleSheet.create({
  container: {padding: 15},
  label: {fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase'},
  leftContainer: {paddingLeft: 10},
});
