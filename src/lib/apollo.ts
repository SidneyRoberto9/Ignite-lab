import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oe2p0k21wf01xigc8z4pdr/master',
  cache: new InMemoryCache(),
});
