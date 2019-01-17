import Loadable from 'react-loadable';
import {empty} from './utils';

const Recharge = Loadable({
  loader : ()=>import('./pages/recharge'),
  loading:empty
})

export {
  Recharge,
}