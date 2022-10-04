import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
  imports: [HttpClientModule, ApolloModule],
})
export class GraphQLModule {
  private readonly defaultUri: string = 'http://localhost:4000/graphql';
  private readonly authUri: string = 'http://localhost:4000/graphql/auth';

  constructor(apollo: Apollo, httpLink: HttpLink) {
    const defaultOptions = { uri: this.defaultUri };
    apollo.createDefault({
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

    const authOptions = { uri: this.authUri };
    apollo.createNamed('auth', {
      link: httpLink.create(authOptions),
      cache: new InMemoryCache(),
    });
  }
}
