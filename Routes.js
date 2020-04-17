import React, { Component } from "react";
import { ImageBackground, Platform, StyleSheet, View } from "react-native";



import {
  TabNavigator,
  TabBarBottom,
  StackNavigator,
  SwitchNavigator,
  NavigationActions
} from "react-navigation";
// import { Icons } from "./utils/imagemapper";
import Home from "./app/components/Home";
import QuarantineDetails from "./app/components/QuarantineDetails"

// import HealthTipDetail from "./components/Home/HealthTipDetail";
// import ConfirmCancel from "./common/ConfirmCancel";
// import LinkCaseId from "./components/linkCase/LinkCaseId";
// import LinkCaseDate from "./components/linkCase/LinkCaseDate";
// import LinkCaseNumber from "./components/linkCase/LinkCaseNumber";
// import HelpScreen from "./components/linkCase/HelpScreen";


const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false
      })
    },
    QuarantineDetails: { screen: QuarantineDetails },
    // linkACase: { screen: ConfirmCancel },
    // linkCaseId: { screen: LinkCaseId },
    // linkCaseDate: { screen: LinkCaseDate },
    // linkCaseNumber: { screen: LinkCaseNumber },
    // helpScreen: { screen: HelpScreen }
  },
  {
    mode: null,
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarVisible: false
    })
  }
);


const mainNavigation = TabNavigator(
  {
    
    Home: { 
      screen: HomeStack,
      navigationOptions: {
        // title: "Home",
        // gesturesEnabled: false,
        // tabBarIcon: ({ focused, tintColor }) => (
        //   <ImageBackground
        //     resizeMode="contain"
        //     resizeMethod="scale"
        //     style={{ width: 30, height: 30 }}
        //     // source={focused ? Icons.PeaksTabSelected : Icons.PeaksTab}
        //   />
        // )
      }
    }
  }
);

const AppStack = StackNavigator(
  {
    Tabs: {
      screen: mainNavigation
    //   navigationOptions: ({ navigation }) => ({
    //     title: "Home",
    //     gesturesEnabled: false
    //   })
    },
    
  }
);

const PeakHealth = SwitchNavigator(
  {
    App: AppStack
  },
  {
    initialRouteName: 'App',
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

class Routes extends Component {
  constructor(props) {
    super();
    

    this.state = {
      isAppInBackground: false
    };
  }

//   componentWillReceiveProps(nextProps) {
//     // casesData = nextProps.cases;
//   }

  
  
  

  render() {
    return (
        <View style={styles.container}>
          <PeakHealth screenProps={{ cases: this.props.cases }} />
        </View>
    );
  }
}

// export default Stylelist;

// const mapStateToProps = state => {
//   return {
//     cases: state.account.case,
//     loggedIn: state.auth.accessToken !== "",
//     inactiveAt: state.auth.inactiveAt
//   };
// };
export default Routes

// export default connect(
//   mapStateToProps,
//   { startInactivityTimer, resetInactivityTimer, logOut }
// )(Routes);
