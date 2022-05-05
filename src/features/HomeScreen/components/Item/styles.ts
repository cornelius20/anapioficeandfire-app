import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../../themes';

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desc: {
    marginTop: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.mediumMargin,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.grey.lighter,
    marginHorizontal: Metrics.mediumMargin,
  },
  text: {
    color: Colors.grey.lighter,
  },
  alterEgo: {
    marginLeft: Metrics.mediumMargin,
  },
  image: {
    width: '100%',
    aspectRatio: 1.778,
    borderRadius: Metrics.baseMargin,
  },
  check: {
    padding: 2,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: Metrics.baseMargin,
  },
});
