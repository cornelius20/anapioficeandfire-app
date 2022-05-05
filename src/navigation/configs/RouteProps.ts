import Screen from './Screen';
import {ItemType} from '../../types/appType';

type ScreenRouteProps = {
  [Screen.Home]: undefined;
  [Screen.SuperheroDetail]: {
    data: ItemType;
  };
};

// eslint-disable-next-line no-undef
export default ScreenRouteProps;
