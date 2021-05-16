import React from 'react'
import gql from 'graphql-tag'
import { useGetRepositoryQuery } from '../generated/graphql'

const GET_REPOSITORY_QUERY = gql`
  query getRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      forkCount
      viewerDefaultCommitEmail
      mergeCommitAllowed
      pullRequest(number: 10) {
        id
      }
      commitComments(first: 30) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          body
          commit {
            author {
              email
            }
            commitResourcePath
            committedDate
            committer {
              email
              name
            }
          }
        }
      }
      pushedAt
    }
  }
`

interface Props {
  owner: string
  name: string
}

const GitHub = ({ owner, name }: Props) => {
  const { loading, error, data } = useGetRepositoryQuery({
    variables: { owner, name },
  })
  return <>test</>
}

export default GitHub
