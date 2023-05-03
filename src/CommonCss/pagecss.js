import {Dimensions} from 'react-native';
module.exports = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
    alignItems: 'center',
    marginRight: 30,
  },
  loginheaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcometxt: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  textInput: {
    width: '90%',
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    color: '#c0c0c0',
    fontWeight: 'bold',
  },
  forgotpasstxt: {
    color: '#c0c0c0',
    fontWeight: 'bold',
  },
  svgCurvefooter: {
    position: 'relative',
    width: Dimensions.get('window').width,
    left: 270,
    top: 160,
  },
  containerFull: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  goback: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
    right: 80,
  },
  formHead: {
    color: '#c0c0c0',
    fontWeight: '700',
  },
  icons1: {
    color: '',
    fontSize: 30,
  },
};
