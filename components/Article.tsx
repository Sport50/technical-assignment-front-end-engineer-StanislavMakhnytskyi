import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IArticle } from '../types/article'

interface Props extends Omit<IArticle, 'id'> {}

export default function Article({ title, body, email, date }: Props) {
  return (
    <Card>
      <CardContent component="article">
        <Typography
          component="h2"
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 15 }} component="p">
          {body}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" component="address">
          {email}
        </Typography>
        <Typography variant="body2" component="time">
          {date}
        </Typography>
      </CardContent>
    </Card>
  )
}
