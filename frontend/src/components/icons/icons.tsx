import { Icon, IconProps } from '@ui-kitten/components';

export function MenuIcon(props: IconProps) {
  return <Icon name="menu-outline" {...props} />;
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
  return <Icon name="settings-outline" {...props} />;
}
