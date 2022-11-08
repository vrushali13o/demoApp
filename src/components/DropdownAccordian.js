import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import {ListItem, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyles} from '../utils/styles';

const DropdownAccordian = ({theme, value, list, onItemPress}) => {
  const {colors} = theme;
  const [isExpanded, setIsExpanded] = useState(false);

  const renderItem = ({item}) => {
    const onPressHandler = () => {
      onItemPress(item.title);
      setIsExpanded(false);
    };
    return (
      <ListItem
        containerStyle={[
          styles.listItemContainer,
          {borderColor: value === item.title ? colors.error : colors.white},
        ]}
        onPress={onPressHandler}
        underlayColor={colors.input}>
        <Icon name={item.icon} color={item.color} size={30} />
        <ListItem.Content>
          <ListItem.Title style={[styles.title, {color: item.color}]}>
            {item.title}
          </ListItem.Title>
          <ListItem.Subtitle style={[styles.subTitle, {color: item.color}]}>
            {item.subTitle}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <View style={[styles.conatainer, {backgroundColor: colors.input}]}>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => setIsExpanded(!isExpanded)}>
        <View style={appStyles.container}>
          <Text style={[styles.label, {color: colors.white}]}>objective</Text>
          <Text
            style={[
              styles.placeholder,
              {color: value ? colors.white : colors.grey3},
            ]}>
            {value ? value : 'website Traffic'}
          </Text>
        </View>
        <Icon
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={25}
          color={colors.white}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default withTheme(DropdownAccordian);

const styles = StyleSheet.create({
  conatainer: {borderRadius: 25, paddingHorizontal: 25, marginBottom: 30},
  headerContainer: {flexDirection: 'row', alignItems: 'center'},
  placeholder: {paddingVertical: 10, fontSize: 16},
  label: {fontSize: 15, fontWeight: '700', textTransform: 'uppercase'},
  listContainer: {marginBottom: 30, marginTop: 20},
  listItemContainer: {
    borderRadius: 25,
    marginBottom: 20,
    paddingVertical: 10,
    borderWidth: 2,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  subTitle: {textTransform: 'uppercase', fontWeight: 'bold'},
});
