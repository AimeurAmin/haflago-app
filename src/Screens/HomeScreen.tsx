import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SideMenu from '../Components/Shared/SideMenu/SideMenu';
import MenuBar from '../Components/Shared/MenuBar/MenuBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { DimensionsModel } from '../Redux/Actions/appActions';
import NavFooter from '../Components/Shared/NavFooter';
import Card from '../Components/Shared/Card/Card';
import normalize from '../utils/RN/normalizeSize';


const HomeScreen = () => {
  const dimensions: DimensionsModel = useSelector(({appState}: any) => appState.dimensions);

  return (
    <SafeAreaView style={styles(dimensions).container}>
      <SideMenu>
        <View style={styles(dimensions).container}>
          <MenuBar />
          <ScrollView style={styles(dimensions).content}>
            {[1, 2, 3].map(_ => (<Card />))}
          </ScrollView>
          <NavFooter />
        </View>
      </SideMenu>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = (dimensions: DimensionsModel) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#FFF',
    width: dimensions.width, 
  },
  content: {
    flex: 1,
    paddingHorizontal: normalize(25),
  },
  cardContainer: {
    padding: 15
  }
});
