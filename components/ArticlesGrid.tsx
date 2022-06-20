import * as React from 'react'
import Stack from '@mui/material/Stack'
import { useRecoilValueLoadable } from 'recoil'
import { allArticlesState } from '../src/state'
import Skeleton from '@mui/material/Skeleton'
import Article from './Article'

export default function ArticlesGrid() {
  const articlesLoadable = useRecoilValueLoadable(allArticlesState)

  switch (articlesLoadable.state) {
    case 'hasValue':
      return (
        <Stack spacing={2}>
          {articlesLoadable.contents?.map(
            ({ id, title, body, email, date }) => {
              return (
                <Article
                  key={id}
                  title={title}
                  body={body}
                  email={email}
                  date={date}
                />
              )
            }
          )}
        </Stack>
      )
    case 'loading':
      return (
        <Stack spacing={2} maxWidth="md">
          {Array(5)
            .fill('')
            .map((skeleton, index) => (
              <Skeleton key={index} variant="rectangular" height={180} />
            ))}
        </Stack>
      )
    case 'hasError':
      throw articlesLoadable.contents
  }
}
