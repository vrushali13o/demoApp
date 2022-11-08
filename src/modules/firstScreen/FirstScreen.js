import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {withTheme} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import DropdownAccordian from '../../components/DropdownAccordian';
import IconButton from '../../components/IconButton';
import InputField from '../../components/InputField';
import {addObjective} from '../../redux/actions';
import {postData} from '../../utils/api';
import {CAMPAIGN, SERVER_URL} from '../../utils/apiUtilities';
import {appStyles} from '../../utils/styles';
import {showToast} from '../../utils/utils';
import Header from '../common/Header';

const list = [
  {
    id: '5ghjhgjg',
    title: 'Website Traffic',
    subTitle: 'Increase my website visits',
    icon: 'web',
    color: '#4BD6C6',
  },
  {
    id: 'jhghjghg',
    title: 'Brand Awareness',
    subTitle: 'tell people about my brand',
    icon: 'bullhorn-outline',
    color: '#EF6C57',
  },
];

const FirstScreen = ({theme, navigation}) => {
  const {colors} = theme;

  const [objective, setObjective] = useState(null);

  const [adName, setAdName] = useState(null);

  const [apiInProgress, setApiInProgress] = useState(false);

  const dispatch = useDispatch();

  const onPressHandler = async () => {
    if (objective && adName) {
      try {
        dispatch(addObjective(objective));
        setApiInProgress(true);
        const {data} = await postData(`${SERVER_URL}${CAMPAIGN}`, {
          name: adName,
          objective: objective,
        });
        if (data?.data) {
          navigation.navigate('SecondScreen');
        } else {
          showToast(data?.message);
        }
        setApiInProgress(false);
      } catch (error) {
        showToast(error?.message);
        setApiInProgress(false);
      }
    } else {
      showToast('Please fill all the fields');
    }
  };

  const onItemPress = value => setObjective(value);

  const onChangeTextHandler = value => setAdName(value);

  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.bluegem}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header active={'first'} navigation={navigation} />
      <View style={styles.conainer}>
        <InputField
          label="AD NAME"
          placeholder="Enter your compain's name"
          onChangeText={onChangeTextHandler}
          value={adName}
        />

        <DropdownAccordian
          list={list}
          value={objective}
          onItemPress={onItemPress}
        />
        <View style={styles.buttonContainer}>
          {apiInProgress ? (
            <ActivityIndicator color={colors.orange} size={40} />
          ) : (
            <IconButton
              name="chevron-right"
              onPress={() =>
                onPressHandler()
                  .then(() => {})
                  .catch(() => {})
              }
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(FirstScreen);

const styles = StyleSheet.create({
  conainer: {padding: 20, marginVertical: 30},
  buttonContainer: {alignItems: 'center'},
});
