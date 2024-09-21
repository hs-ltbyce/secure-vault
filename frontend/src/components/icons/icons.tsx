import { Icon, IconProps } from '@ui-kitten/components';

export function MenuIcon(props: IconProps) {
  return <Icon name="menu" {...props} />;
}
export function PlusIcon(props: IconProps) {
  return <Icon name="plus" {...props} />;
}

export function EmptyIcon(props: IconProps) {
  return (
    <Icon
      style={{ width: 100, height: 100, ...props.style }}
      name="empty"
      pack="assets"
      {...props}
    />
  );
}

export function SettingIcon(props: IconProps) {
  return <Icon name="settings" {...props} />;
}

export function BackIcon(props: IconProps) {
  return <Icon name="arrow-back" {...props} />;
}

export function ArrowIOSBackIcon(props: IconProps) {
  return <Icon name="arrow-ios-back" {...props} />;
}

export function ArrowIOSForwardIcon(props: IconProps) {
  return <Icon name="arrow-ios-forward" {...props} />;
}

export function BellIcon(props: IconProps) {
  return <Icon name="bell-outline" {...props} />;
}
