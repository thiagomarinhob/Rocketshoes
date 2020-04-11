import { createStore } from 'redux';

import reducer from './modules/cars/reducer';

const store = createStore(reducer);

export default store;
