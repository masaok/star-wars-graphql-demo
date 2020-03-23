import * as React from 'react'
import { FilmListQuery } from '../../generated/graphql'
// import './styles.css'
// import { fileURLToPath } from 'url'

export interface OwnProps {
  // handleIdChange: (newId: number) => void
}

interface Props extends OwnProps {
  data: FilmListQuery
}

const className = 'FilmList'

const FilmList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Films</h3>
    <ol className={`${className}__list`}>
      {!!data.allFilms &&
        !!data.allFilms.edges &&
        data.allFilms.edges.map(
          (film, i) =>
            !!film && (
              <li key={i}>{!!film && !!film.node && film.node.title}</li>
            )
        )}
    </ol>
  </div>
)

export default FilmList
