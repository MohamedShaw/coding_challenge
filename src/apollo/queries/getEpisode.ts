import { gql } from '@apollo/client';

export const GET_EPISODE = gql`
 query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
        info{
            count

            prev
        }

        results {
            name
            id

        }
    }
}
`;


