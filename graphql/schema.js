import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './type-defs';

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
