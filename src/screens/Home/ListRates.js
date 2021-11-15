import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import PropTypes from 'prop-types';

import Lottie from 'lottie-react-native';

import Label from '@/components/Label';

import spacings from '@/theme/spacings';
import colors from '@/theme/colors';
import { convertToNumber, rateImages } from '@/helpers/functions/utils';

import empty from '@/assets/animations/empty-list';
import icDefault from '@/assets/icons/default.png';

const ListRates = ({ items, isLoading }) => {
  const renderEmptyList = () => {
    if (!isLoading && !items.length) {
      return (
        <StyledEmptyListContainer>
          <View
            style={{
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Lottie source={empty} loop autoPlay resizeMode='contain' />
          </View>
          <Label
            textAlign='center'
            color={colors.WHITE}
            fontWeight={500}
            fontSize={18}
          >
            There is no data!
          </Label>
        </StyledEmptyListContainer>
      );
    }

    return null;
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.WHITE
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10
        }}
      >
        <StyledImage
          source={rateImages[item?.symbol.toUpperCase()] || icDefault}
        />

        <View>
          <Label
            lineHeight={20}
            fontWeight={700}
            fontSize={14}
            color={colors.WHITE}
          >
            {item.symbol}
          </Label>
          <Label
            lineHeight={20}
            fontWeight={400}
            fontSize={12}
            color={colors.DEFAULT_TEXT}
          >
            {item?.id}
          </Label>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 10
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <Label
            textAlign='center'
            fontWeight={700}
            lineHeight={20}
            fontSize={14}
            color={colors.WHITE}
          >
            $
            {convertToNumber(item?.rateUsd)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </Label>
          <Label
            fontWeight={400}
            lineHeight={20}
            fontSize={12}
            color={colors.ACTION_DANGER}
          >
            {item.type}
          </Label>
        </View>
      </View>
    </View>
  );

  return (
    <>
      {isLoading ? (
        <StyledActivityIndicator size='large' color={colors.PRIMARY} />
      ) : (
        <StyledFlatList
          style={{ backgroundColor: '#1c2831' }}
          data={items}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmptyList}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

const StyledImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const StyledActivityIndicator = styled.ActivityIndicator`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: spacings.EXTRA_SMALL
  }
})``;

const StyledEmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

ListRates.defaultProps = {
  isLoading: false,
  items: []
};

ListRates.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      symbol: PropTypes.string,
      currencySymbol: PropTypes.string,
      type: PropTypes.string,
      rateUsd: PropTypes.string
    })
  )
};

export default memo(ListRates);
