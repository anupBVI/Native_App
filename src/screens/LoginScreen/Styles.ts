import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 150,
    height: 100,
  },
  headerText: {
    gap: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  subTitle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'gray',
  },
  inputBox: {
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
  },
  errorText: {
    color: 'red',
  },
  visibilityIcon: {
    position: 'absolute',
    right: 10,
  },

  btnContainer: {
    gap: 12,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3e35f1', // Background color of the button
    borderRadius: 5, // Border radius of the button
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    alignSelf: 'center', // Align the button in the center
  },

  loginbutton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderBlockColor: 'black',
  },

  register: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'orange',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
  },
  loginbuttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  social: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  facebook: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#3B5999',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export const rulerStyles = StyleSheet.create({
  hrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  hrLine: {
    flex: 1,
    height: 1,
    marginHorizontal: 6,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});
