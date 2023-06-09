import { GlobalStyle } from './GlobalStyle';

import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './Friends/FriendList';
import friends from './Friends/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
