import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { AsyncStorage } from 'react-native';

const reactotron = Reactotron.configure({
   host: '192.168.1.5',
   name: 'XCompany',
})
   .useReactNative()
   .setAsyncStorageHandler(AsyncStorage)
   .use(reactotronRedux())
   .connect();

export default reactotron;
