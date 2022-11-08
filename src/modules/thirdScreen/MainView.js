import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import {useSelector} from 'react-redux';
import ViewOnlyField from '../../components/ViewOnlyField';

const MainView = ({theme, data}) => {
  const {colors} = theme;
  const {image} = useSelector(objctiveReducer => objctiveReducer);

  const items = data?.data?.campaign?.adsquads?.targeting;
  const languages = items?.languages?.map(item => item.name);
  const locations = items?.geos?.map(item => item.country.name);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.title, {color: colors.white}]}>Media</Text>
        <Image
          style={[styles.image, {backgroundColor: colors.input}]}
          source={{uri: image}}
        />
      </View>
      <View>
        <Text style={[styles.title, {color: colors.white}]}>Audience</Text>
        <View style={[styles.subContainer, {backgroundColor: colors.input}]}>
          <ViewOnlyField label={'gender'} value={items?.gender?.name} />
          <ViewOnlyField
            label={'age range'}
            value={`${items?.age_range?.min_age} - ${items?.age_range?.max_age}`}
          />
          <ViewOnlyField label={'language'} value={languages?.toString()} />
          <ViewOnlyField label={'location'} value={locations?.toString()} />
        </View>
      </View>
    </View>
  );
};

export default withTheme(MainView);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 25,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {textTransform: 'uppercase', fontSize: 16, fontWeight: 'bold'},
  subContainer: {
    justifyContent: 'space-evenly',
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
    height: 250,
    width: 160,
  },
  image: {height: 250, width: 160, borderRadius: 30, marginTop: 10},
});
