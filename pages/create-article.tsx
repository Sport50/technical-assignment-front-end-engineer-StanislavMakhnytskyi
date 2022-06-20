import * as React from 'react'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Link from '../components/Link'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Copyright from '../components/Copyright'
import CreateArticleForm from '../components/CreateArticleForm'

const CreateArticle: NextPage = () => {
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
        <CreateArticleForm />
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

export default CreateArticle
