import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import gql from 'graphql-tag'
import GitHub from '../../components/GitHub'
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
      owner: data,
    },
  }
}

const Home = ({ owner }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <img src={owner.repositoryOwner.avatarUrl} alt="avatar" />
      <span>{owner.repositoryOwner.login}의 git report</span>
      <GitHub owner={owner.repositoryOwner.login} name={'wiki-blog'} />
    </>
  )
}

export default Home
