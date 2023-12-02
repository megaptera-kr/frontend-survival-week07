import domainReducer from './domainReducer';
import uiReducer from './uiReducer';

export default {
  ...domainReducer,
  ...uiReducer,
};
