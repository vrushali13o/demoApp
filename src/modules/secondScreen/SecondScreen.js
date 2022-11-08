import React, {useState} from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {withTheme, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import ContainButton from '../../components/ContainButton';
import InputField from '../../components/InputField';
import {addImage, addUrl} from '../../redux/actions';
import {postData} from '../../utils/api';
import {CREATIVE, SERVER_URL} from '../../utils/apiUtilities';
import {appStyles} from '../../utils/styles';
import {showToast} from '../../utils/utils';
import Header from '../common/Header';

const SecondScreen = ({theme, navigation}) => {
  const {colors} = theme;

  const [image, setImage] = useState(null);
  const [compaign, setCompaign] = useState(null);
  const [url, setUrl] = useState(null);
  const dispatch = useDispatch();

  const {objective} = useSelector(objctiveReducer => objctiveReducer);

  const onPressHandler = async () => {
    if (compaign && image) {
      try {
        dispatch(addImage(image.uri));
        if (url) {
          dispatch(addUrl(url));
        }
        const payload = {
          name: compaign,
          website_url: image,
        };
        const {data} = await postData(`${SERVER_URL}${CREATIVE}`, payload);
        showToast(data?.message);
        navigation.navigate('ThirdScreen');
      } catch (error) {
        showToast(error?.message);
      }
    } else {
      showToast('Please fill all the fields');
    }
  };

  const onAddMediaHandler = async () => {
    try {
      let options = {
        quality: 1,
        selectionLimit: 1,
      };
      const result = await launchImageLibrary(options);
      if (result.didCancel) {
        showToast('User Cancel the selection');
      } else if (result.assets) {
        setImage(result.assets[0]);
      } else {
        showToast('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.purple}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header active={'second'} />
      <View style={styles.container}>
        <View style={[styles.inputContainer, {backgroundColor: colors.input}]}>
          <InputField
            backgroundColor={colors.opacity}
            label="Campaign Name"
            placeholder="Campaign name here"
            value={compaign}
            onChangeText={value => setCompaign(value)}
          />
          {objective === 'Website Traffic' && (
            <InputField
              backgroundColor={colors.opacity}
              label="Website"
              placeholder="Website url here"
              value={url}
              onChangeText={value => setUrl(value)}
            />
          )}

          {!image ? (
            <TouchableOpacity
              style={[styles.touchable, {backgroundColor: colors.opacity}]}
              onPress={onAddMediaHandler}>
              <View
                style={[styles.iconContainer, {borderColor: colors.orange}]}>
                <Icon name="camera" color={colors.orange} size={40} />
              </View>
              <Text style={{color: colors.orange}}>Add Media</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onAddMediaHandler}>
              <Image source={{uri: image.uri}} style={styles.touchable} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <ContainButton
            title="Next"
            icon="chevron-right"
            iconRight
            onPress={() =>
              onPressHandler()
                .then(() => {})
                .catch(() => {})
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(SecondScreen);

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, paddingVertical: 10, opacity: 0.9},
  inputContainer: {
    borderRadius: 25,
    padding: 15,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    borderRadius: 25,
  },
  image: {
    height: 300,
  },
  buttonContainer: {alignSelf: 'center', width: 150, marginTop: 20},
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
