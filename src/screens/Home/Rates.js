import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

import Label from '@/components/Label';
import colors from '@/theme/colors';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

import ListRates from './ListRates';

import api from '@/services/Api';
import ratesData from '@/data/rates.json';

const RatesScreen = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const typeCurrency = 'crypto';

  const filterRatesCrypto = data => {
    return data
      .filter(item => item.type === typeCurrency)
      .sort((a, b) =>
        a.rateUsd.localeCompare(b.rateUsd, 'en', { sensitivity: 'base' })
      );
  };

  const sortRates = () => {
    setSort(!sort);

    const sortRates = rates.sort((a, b) => {
      const less =
        parseFloat(a.rateUsd).toFixed(2) < parseFloat(b.rateUsd).toFixed(2);
      const grater =
        parseFloat(a.rateUsd).toFixed(2) > parseFloat(b.rateUsd).toFixed(2);

      if (less) {
        return -1;
      }
      if (grater) {
        return 1;
      }
      return 0;
    });

    setRates(sortRates);
  };

  const loadRates = async () => {
    try {
      if (isLoading) return;

      setIsLoading(true);

      const {
        data: { data }
      } = await api.get(`/rates`);

      setRates(filterRatesCrypto(data)); //
      setIsLoading(false);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.response.data);
      console.log(error.response.data);

      setRates(filterRatesCrypto(ratesData.data)); //

      setIsLoading(false);
    } finally {
      hideError();
    }
  };

  const hideError = () => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const filterData = textToSearch => {
    if (textToSearch.length) {
      setRates(
        rates.filter(item =>
          item.id.toLowerCase().includes(textToSearch.toLowerCase())
        )
      );
    } else {
      loadRates();
    }
  };

  useEffect(() => {
    loadRates();
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledViewInput>
          <StyledIcon name='search' size={25} color={'#000'} />
          <TextInput
            style={{ width: '85%', height: 35 }}
            onChangeText={text => filterData(text)}
            placeholder='Search...'
            placeholderTextColor={colors.DARK_TEXT}
          />
        </StyledViewInput>
        <StyledSortButton onPress={sortRates}>
          <Label
            textAlign='center'
            fontWeight={500}
            fontSize={14}
            color={colors.WHITE}
          >
            Sort By
          </Label>
          <IconFontAwesome
            name={sort ? 'sort-alpha-up' : 'sort-alpha-down'}
            size={16}
            color={'#FFF'}
          />
        </StyledSortButton>
      </StyledHeader>

      {errorMessage && (
        <Label
          textAlign='center'
          width='100%'
          fontWeight={400}
          fontSize={12}
          marginBottom={8}
          color={colors.DANGER}
        >
          {errorMessage}
        </Label>
      )}
      <ListRates items={rates} isLoading={isLoading} />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const StyledHeader = styled.View`
  width: 100%;
  height: 65px;
  flex-direction: row;
  background: rgba(52, 52, 52, 0.9);
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 8px;
`;

const StyledSortButton = styled.TouchableOpacity`
  width: 30%;
  height: 45px;
  background: ${colors.PRIMARY};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  padding: 10px;
`;

const StyledViewInput = styled.View`
  width: 70%;
  height: 45px;
  background: ${colors.WHITE};
  border-radius: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledIcon = styled(IconMaterial)`
  width: 10%;
  margin-left: 10px;
`;

export default RatesScreen;
