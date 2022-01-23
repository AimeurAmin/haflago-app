import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import SideMenu from '../Components/SideMenu';
import MenuBar from '../Components/MenuBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { DimensionsModel } from '../Redux/Actions/appActions';


const HomeScreen = () => {
  const dimensions: DimensionsModel = useSelector(({appState}: any) => appState.dimensions);

  return (
    <SafeAreaView>
      <SideMenu>
        <View style={{ ...styles.container, width: dimensions.width, height: dimensions.height}}>
          <MenuBar />
        </View>
      </SideMenu>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D47A8',
    color: '#FFF',
  },
});
