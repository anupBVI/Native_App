import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  textContainer: {
    height : "90%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal : 20,

  },
  icon: {
    color: 'green',
  },
  title: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'green',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'gray',
  },
  btnContainer: {
    height : "10%",
    width : "100%",
    paddingHorizontal : 20,
  },

  startButton: {
    width : "100%",
    backgroundColor: 'black',
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderBlockColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign : "center"
  },
});
