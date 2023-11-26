import Head from 'next/head'
import {z} from 'zod'
import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const message: z.ZodString = z
  .string({ required_error: '入力が必須の項目です' })
  .min(1, { message: '入力が必須の項目です' })
  .max(10, { message: '入力値が長すぎます' })

const InputFormSchema = z.object({
  message: message,
})

type InputFormType = z.infer<typeof InputFormSchema>

const Home: NextPageWithLayout = () => {
  const onSubmit: SubmitHandler<InputFormType> = (data) => {
    console.log(data)
  }

  const {
    control,
    handleSubmit,
  } = useForm<any>({
    mode: 'onBlur',
    resolver: zodResolver(InputFormSchema),
  })

  return (
    <>
      <h1>hello</h1>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="message"
            control={control}
            render={({ field, formState: { errors } }) => (
              <TextField
                {...field}
                label="Message"
                autoComplete="off"
                fullWidth
                sx={{ mb: 2 }}
                error={errors.message ? true : false}
                helperText={errors.message?.message as string}
              />
            )}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
      </Box>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
