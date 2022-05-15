import EditUsersPage from 'page-content/EditUsersPage'
import type { NextPage, GetServerSideProps } from 'next'

interface ISingleUserPageProps {
  id: string;
}

const SingleUserPage: NextPage<ISingleUserPageProps> = ({ id }) => {
  return (
    <EditUsersPage id={ id }/>
  )
}

export default SingleUserPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query

  if (id) {
    return {
      props: {
        id: id,
      }
    }
  }

  return {
    notFound: true
  }
}
