import { gql } from '@apollo/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }

      results {
       name
        id
        image
        gender
        species
        status
      }
    }
  }
`;


