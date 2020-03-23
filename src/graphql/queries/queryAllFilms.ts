import gql from 'graphql-tag'

export const QUERY_STATE_NAMES = gql`
  query FilmList {
    allFilms {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
