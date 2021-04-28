import { createStore } from 'redux';
import rootReducer from '../../FormWizard/reducers';

const store = createStore(rootReducer);
export default store;
