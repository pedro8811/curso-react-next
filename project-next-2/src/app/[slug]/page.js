export default function Page() {
  return <h1>Hello, Dynamic Route!</h1>
}

export const getStaticProps = async () => {
  return {
    props: {
      name: 'Pedro'
    }
  }
}
