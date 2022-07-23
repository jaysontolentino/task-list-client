import {useQuery} from '@apollo/client'
import { PROFILE } from '../graphql/queries'

export function useAuth() {
    const {error, data} = useQuery(PROFILE)

    if(error) return null

    if(data) return data.user

}
