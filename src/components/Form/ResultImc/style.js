import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  numberImc: {
    fontSize: 48,
    color: '#FF0043',
    fontWeight: 'bold',
  },
  information: {
    fontSize: 18,
    color: '#FF0043',
    fontWeight: 'bold',
  },
  boxSharedButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  shared: {
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default styles;
