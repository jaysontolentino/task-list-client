import { useQuery } from '@apollo/client';
import { PROFILE } from './../graphql/queries';

export function useUser() {
    const auth = useQuery(PROFILE)
    return auth
}
