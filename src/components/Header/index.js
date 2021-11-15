import React, { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import StatusBarColor from '@/components/StatusBarColor';
import colors from '@/theme/colors';

import imgLogo from '../../assets/images/logo_header.gif';

const Header = ({
  showBackButton,
  onBackPress,
  slim,
  backgroundColor,
  backButtonColor,
  isFocused,
  leftIcon
}) => {
  const { navigate } = useNavigation();

  return (
    <>
      <StyledSafeArea backgroundColor={backgroundColor} />
      {isFocused && <StatusBarColor backgroundColor={backgroundColor} />}
      <StyledContainer backgroundColor={backgroundColor} slim={slim}>
        {showBackButton ? (
          <>
            <TouchableOpacity onPress={onBackPress}>
              <Icon name='arrow-left' size={24} color={colors.WHITE} />
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                alignItems: 'center'
              }}
            >
              <StyledImage source={imgLogo} />
            </View>
          </>
        ) : (
          <View
            style={{
              width: '100%',
              alignItems: 'center'
            }}
          >
            <StyledImage source={imgLogo} />
          </View>
        )}

        {leftIcon ? (
          <StyledIconContainer>
            <StyledIcon backgroundColor={backButtonColor} onPress={() => {}}>
              <Icon name='plus' size={24} color='#FFF' />
            </StyledIcon>
          </StyledIconContainer>
        ) : (
          <StyledEmptyIcon />
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  height: ${({ slim }) => (slim ? 48 : 56)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 0px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledSafeArea = styled.SafeAreaView`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledIconContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledIcon = styled.TouchableOpacity`
  width: 37px;
  height: 37px;
  justify-content: center;
  align-items: center;
  margin-right: 27px;
`;

const StyledEmptyIcon = styled.View`
  width: 37px;
  height: 37px;
`;

const StyledImage = styled.Image`
  width: 40px;
  height: 40px;
`;
Header.defaultProps = {
  onBackPress: () => {},
  slim: false,
  showBackButton: false,
  backgroundColor: colors.PRIMARY,
  backButtonColor: colors.WHITE,
  isFocused: true,
  leftIcon: false
};

Header.propTypes = {
  onBackPress: PropTypes.func,
  slim: PropTypes.bool,
  showBackButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backButtonColor: PropTypes.string,
  isFocused: PropTypes.bool,
  leftIcon: PropTypes.bool
};

export default memo(Header);
