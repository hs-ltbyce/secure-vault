/**
 * In i18next, there are some definitions regarding Account properties.
 * If you want to rename some Account property names,
 * the corresponding parts in i18next need to be modified together to ensure that their names always remain in one-to-one correspondence.
 * Location of i18next definition: @/translations/[language]/common.json
 * Properties: keyList.setting
 */
export interface Account {
  id: string;
  title: string;
  account: string;
  password: string;
  createTime: string | undefined;
  updateTime: string | undefined;
  remark: string | undefined;
  email?: string;
  weChat?: string;
  qq?: string;
  phone?: string;
}
