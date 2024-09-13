import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

const IconProvider = (source: ImageSourcePropType) => ({
  toReactElement: ({ ...props }) => <Image {...props} source={source} />,
});

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    empty: IconProvider(require('@/assets/images/empty.png')),
  },
};
