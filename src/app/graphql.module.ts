import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import {
  APOLLO_NAMED_OPTIONS,
  ApolloModule,
  NamedOptions,
} from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const authUri = 'http://localhost:4000/graphql/auth';
const defaultUri = 'http://localhost:4000/graphql';

export function createDefaultApollo(httpLink: HttpLink): NamedOptions {
  return {
    default: {
      // name: 'default',
      link: httpLink.create({ uri: defaultUri }),
      cache: new InMemoryCache({
        typePolicies: {
          Quotes: {
            keyFields: ['_id'],
            fields: {
              allQuotes: {
                merge: true,
              },
            },
          },
        },
      }),
    },
    auth: {
      // name: 'auth',
      link: httpLink.create({ uri: authUri }),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createDefaultApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
