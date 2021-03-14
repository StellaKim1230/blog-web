import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { gql } from '@apollo/client'
import client from '../lib/apollo-client'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        viewer {
          login
        }
      }
    `,
  })

  return {
    props: {
      viewer: data.viewer,
    },
  }
}

const Home = ({ viewer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <span>{viewer.login}의 git report</span>
}

export default Home
