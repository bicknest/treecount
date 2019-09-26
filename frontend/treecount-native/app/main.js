import Config from 'react-native-config';
import configureStore from './store/configureStore';
// import utils from './utils';

let store = null;

// TODO more strictly type this?
export default function main({onRehydrate}): object {
  const needsRehydration = store === null;
  if (!needsRehydration) {
    return {store, needsRehydration};
  }

  const IS_DEV = !!Config.IS_DEV;
  const logEnabled = IS_DEV && true;
  const config = {
    IS_DEV,
    logEnabled,
  };
  // utils.configure(config);
  store = configureStore({version}, {IS_DEV, onRehydrate, logEnabled});
  return {store, needsRehydration};
}
