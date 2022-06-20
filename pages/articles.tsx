import * as React from 'react'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Link from '../components/Link'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Copyright from '../components/Copyright'

const ArticlesGrid = dynamic(() => import('../components/ArticlesGrid'), {
  ssr: false,
})

const Articles: NextPage = () => {
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
        <ArticlesGrid />
        <Box
          maxWidth="sm"
          sx={{
            my: 4,
          }}
        >
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Articles
