import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    FetchResult,
    createHttpLink,
    gql
  } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { Observable } from '@apollo/client/utilities'
import { GraphQLError } from 'graphql'
import { getAccessToken, setAccessToken } from './utils/localStorage'

  export const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      accessToken
    }
  }`

  const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'include'
  })
  
  const authLink = setContext((operation, { headers }) => {

    const token = getAccessToken()
  
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })
  
  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {

        console.log(graphQLErrors)
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            case 'UNAUTHENTICATED':
              // ignore 401 error for a refresh request
              console.log(operation.operationName)
              if (operation.operationName === 'refreshToken') return;
  
              const observable = new Observable<FetchResult<Record<string, any>>>(
                (observer) => {
                  // used an annonymous function for using an async function
                  (async () => {

                    try {

                      const accessToken = await refreshToken()
  
                      if (!accessToken) {
                        throw new GraphQLError('Empty AccessToken')
                      }
  
                      // Retry the failed request
                      const subscriber = {
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                      };
  
                      forward(operation).subscribe(subscriber);
                    } catch (err) {
                      observer.error(err);
                    }
                  })();
                }
              );
  
              return observable;
          }
        }
      }
  
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }
  );

  
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache()
  });
  
  // Request a refresh token to then stores and returns the accessToken.
  const refreshToken = async () => {
    try {
      const refreshResolverResponse = await client.mutate({
        mutation: REFRESH_TOKEN,
      });

      console.log(refreshResolverResponse)
  
      const accessToken = refreshResolverResponse.data?.refreshToken.accessToken;
      setAccessToken(accessToken)
      return accessToken;
    } catch (err) {
      throw err;
    }
  };

  export default client