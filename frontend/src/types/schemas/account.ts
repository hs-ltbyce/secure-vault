export interface Account {
  id: string;
  title: string;
  account: string;
  password: string;
  createTime: string | undefined;
  updateTime: string | undefined;
  remark: string | undefined;
  email: string[] | undefined;
  weChat: string | undefined;
  qq: string | undefined;
  phone: string | undefined;
}
