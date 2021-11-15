import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '@/theme';

export default function Loading() {
  const { colors } = theme;

  return (
    <StyledContainer>
      <ActivityIndicator size={50} color={colors.PRIMARY} />
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex: 1;
  justify-content: 'center';
  align-items: 'center';
`;
