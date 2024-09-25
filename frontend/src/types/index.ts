import { ImageProps, TextProps, ViewProps } from 'react-native';

type RenderFCProp<Props> = (props?: Props) => React.ReactElement;
type RenderProp<Props> = RenderFCProp<Props> | React.ReactElement;

export type RenderAccessoryLeft = RenderProp<Partial<ImageProps>>;
export type RenderAccessoryRight = RenderProp<ViewProps>;
export type RenderTextElement = RenderProp<TextProps>;
