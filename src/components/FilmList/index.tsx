import * as React from 'react'
import { useFilmListQuery } from '../../generated/graphql'
import FilmList, { OwnProps } from './FilmList'

const FilmListContainer = (props: OwnProps) => {
  const { data, error, loading } = useFilmListQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return <FilmList data={data} {...props} />
}

export default FilmListContainer
