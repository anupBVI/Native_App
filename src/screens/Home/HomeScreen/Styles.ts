import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    gap: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    gap: 10,
  },

  label: {
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: 'black',
  },

  menuContainer: {
    display: 'flex',
    gap: 20,
  },
  category: {
    // borderBlockColor: 'red',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    tintColor: 'white',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: 'white',
  },
  right: {
    display: 'flex',
    gap: 10,
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  number: {
    color: 'white',
  },

  searchBox: {
    backgroundColor: 'lightgray',
    borderRadius: 40,
    // borderBlockColor : "black",
    // borderWidth : 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  textInput: {
    color: 'black',
    flex: 2,
    fontSize: 18,
  },
  cardsContainer: {
    height: '100%',
    width: '100%',
    borderBlockColor: 'red',
    borderWidth: 2,
    display : "flex",flexDirection : "row",
    flexWrap : "wrap",
    gap : 2,
  },
  card: {
    height: 200,
    width : "48%"    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position : "absolute",
    backgroundColor : "#fff",
    paddingVertical : 10,
    bottom : 0,
    opacity : 0.3,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    width : "100%",
    display : "flex",
    justifyContent : "center"


  },
});
