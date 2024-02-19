import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBarStyles: {
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal : 10,
    paddingVertical: 10,
    borderTopWidth: 0,
    elevation: 5,
    borderTopColor: 'transparent',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },

  activeTabStyles: {
    borderRadius: 30,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  tabIconContainer: {
    width: 34,
    height: 34,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Set to your desired default background color
    // marginRight: 5,
  },
  tabIconActive: {
    backgroundColor: 'black', // Set to your desired active background color for the icon
    textAlign : "center"
  },
  tabTextContainer: {
    // backgroundColor: 'lightblue',
    borderRadius: 20,
    paddingHorizontal: 6,
  },
  tabText: {
    fontSize: 16,
    fontWeight : "bold",
    color: 'black', // Set to your desired text color
  },
});
