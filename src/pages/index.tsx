import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import gql from 'graphql-tag'
import client from '../../lib/apollo-client'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
        repositoryOwner(login: "StellaKim1230") {
          avatarUrl(size: 100)
          id
          login
        }
      }
    `,
  })

  return {
    props: {
      data: data,
    },
  }
}

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <img src={data.repositoryOwner.avatarUrl} alt="avatar" />
      <span>{data.repositoryOwner.login}의 git report</span>
    </>
  )
}

export default Home
