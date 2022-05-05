import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '../../../../components';
import {ItemType} from '../../../../types/appType';
import styles from './styles';
import {Colors} from '../../../../themes';

interface Props {
  data: ItemType;
  onPress: (value: ItemType) => void;
  inSelected: boolean;
}

function Item({data, onPress, inSelected}: Props) {
  return (
    <TouchableOpacity onPress={() => onPress(data)} style={styles.container}>
      <View>
        <Text color="white" bold="semiBold" size="large">
          {data.displayName}
        </Text>
        <View style={styles.desc}>
          <Icons name="segment" size={16} color={Colors.grey.lighter} />
          <Text style={[styles.alterEgo]} color="lightGrey" size="small">
            {data.playedBy[0] || ''}
          </Text>
          <View style={styles.dot} />
          <Text color="lightGrey" size="small">
            {data.gender}
          </Text>
        </View>
      </View>
      {inSelected && (
        <View style={styles.check}>
          <Icons name="check" color={'#fff'} size={17} />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Item;
