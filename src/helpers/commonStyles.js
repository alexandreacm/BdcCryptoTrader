import styled from 'styled-components/native';
import { handlePixels } from '@/helpers/functions/utils';
import colors from '@/theme/colors';

export const StyledContainer = styled.View`
  flex: ${({ flex }) => flex || 1};
  width: ${({ width }) => handlePixels(width) || 'auto'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom || 0)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft || 0)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight || 0)};
  margin-top: ${({ marginTop }) => handlePixels(marginTop || 0)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop || 0)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight || 8)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft || 8)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom || 0)};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.COLOR_GRAY};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const StyledSelectContainer = styled(StyledContainer)`
  height: 40px;
  border-radius: 8px;
  justify-content: center;
`;

export const StyledRow = styled(StyledContainer)`
  min-height: 40px;
  flex-direction: row;
  align-items: center;
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight || 0)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft || 0)};
`;
