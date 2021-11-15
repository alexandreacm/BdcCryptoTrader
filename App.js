import React from 'react';
import styled from 'styled-components/native';

import Routes from '@/routes';
import ThemeProvider from '@/components/ThemeProvider';
import CustomNavigationContainer from '@/components/CustomNavigationContainer';

const App = () => {
  return (
    <StyledSafeAreaView>
      <CustomNavigationContainer>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </CustomNavigationContainer>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
export default App;
