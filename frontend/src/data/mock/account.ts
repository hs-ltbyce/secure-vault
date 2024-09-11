import { Account } from '@/types/schemas/account';
import Mock from 'mockjs';
export function mockAccountList(count: number): Account[] {
  const accounts: Account[] = [];

  for (let i = 0; i < count; i++) {
    const accountData: Account = {
      id: Mock.Random.guid(),
      title: Mock.Random.ctitle(2, 4),
      account: Mock.Random.email(),
      pwd: Mock.Random.string(8, 16),
      createTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      updateTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      note: Mock.Random.csentence(10, 30) || null,
    };

    accounts.push(accountData);
  }

  return accounts;
}
