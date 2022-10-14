import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
  imports: [HttpClientModule, ApolloModule],
})
export class GraphQLModule {
  private readonly uri: string = 'http://localhost:4000/graphql';

  constructor(apollo: Apollo, httpLink: HttpLink) {
    const defaultOptions = {
      uri: this.uri,
      withcredentials: true,
      // credentials: 'include',
    };
    apollo.create({
      link: httpLink.create(defaultOptions),
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
    });
  }
}
