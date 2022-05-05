import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {FooterFlatList, NoData} from '../../components';
import styles from './styles';
import Item from './components/Item';
import Header from './components/Header';
import AppActions from '../../reduxs/reducer/AppReducer';
import {RootState} from '../../reduxs';
import {Colors} from '../../themes';
import {ItemType} from '../../types/appType';

const MAX_SELECT = 10;

function HomeScreen() {
  const {data, fetching, textSearch} = useSelector(
    (state: RootState) => state.list,
  );
  const dispatch = useDispatch();
  const [selectedItems, setSeletedItems] = useState<any>({});

  useEffect(() => {
    dispatch(AppActions.getSuperheroes());
  }, [dispatch]);

  function onRefresh() {
    dispatch(AppActions.getSuperheroes());
  }

  function renderFooter() {
    if (fetching) {
      return <FooterFlatList />;
    }
  }

  function renderEmptyList() {
    return <NoData />;
  }

  const list = useMemo(() => {
    if (data.length !== 0) {
      return data
        .sort((a, b) => (a.displayName > b.displayName ? 1 : -1))
        .filter((item: ItemType) => {
          return item.textForSearch.toLocaleLowerCase().includes(textSearch);
        });
    }

    return [];
  }, [data, textSearch]);

  function handlePress(value: ItemType) {
    setSeletedItems((state: any) => {
      const newState = {...state};
      const item = newState[value.url];
      if (item) {
        delete newState[value.url];
      } else {
        if (Object.keys(newState).length <= MAX_SELECT) {
          newState[value.url] = value;
        }
      }

      return newState;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        refreshControl={
          <RefreshControl
            tintColor={Colors.white}
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={<Header list={Object.values(selectedItems)} />}
        ListFooterComponent={renderFooter()}
        ListEmptyComponent={renderEmptyList()}
        keyExtractor={item => item.url}
        renderItem={({item}) => (
          <Item
            data={item}
            onPress={handlePress}
            inSelected={!!selectedItems[item.url]}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
