import { colors } from 'shared/styles';

export const innerWrapperStyles = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
});

export const errorMessageStyles = () => ({
  fontFamily: 'SFProDisplay-Regular',
  color: colors.ALERT,
  paddingLeft: 0,
  margin: 0,
  height: 20
});
