import styled from 'styled-components'
import P from 'prop-types'

const Heading = styled.h1`
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Index({ name }) {
  return (
    <Heading>{name}</Heading>
  )
}

export const getStaticProps = async () => {
  const raw = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await raw.json()

  return {
    props: {
      name: 'Pedro',
    },
  };
};

Index.propTypes = {
  name: P.string,
}
