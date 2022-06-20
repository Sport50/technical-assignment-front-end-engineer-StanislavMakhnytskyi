import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { postArticle } from '../api/articles'
import { IArticle } from '../types/article'

export default function CreateArticleForm() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Omit<IArticle, 'id'>>()
  const [date, setDate] = useState(null)
  useEffect(() => {
    register('date', { required: 'Date is required' })
  }, [register])

  const onSubmit = async (formData: Omit<IArticle, 'id'>) => {
    await postArticle(formData)
    setDate(null)
    reset()
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          error={!!errors.title}
          helperText={errors?.title?.message}
          {...register('title', { required: 'Title is required' })}
        />
        <TextField
          multiline
          id="body"
          label="Body"
          variant="outlined"
          error={!!errors.body}
          helperText={errors?.body?.message}
          {...register('body', { required: 'Body is required' })}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors?.email?.message}
          {...register('email', {
            required: 'Body is required',
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <MobileDatePicker
          value={date}
          onChange={(date: any) => {
            setDate(date)
            setValue('date', date, {
              shouldValidate: true,
              shouldDirty: true,
            })
          }}
          label="Date"
          inputFormat="MM/dd/yyyy"
          renderInput={(params) => (
            <TextField
              id="date"
              variant="outlined"
              {...params}
              error={!!errors.date}
              helperText={errors?.date?.message}
            />
          )}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  )
}
