import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../components/Link'
import Copyright from '../components/Copyright'

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Technical assignment front-end engineer
        </Typography>
        <Link href="/articles" color="secondary">
          Go to the articles page
        </Link>
        <Link href="/create-article" color="secondary">
          Go to the create article form
        </Link>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Home
