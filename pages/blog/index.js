import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const Home = () => {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero
        title='Blog'
        subtitle='React Posts'
      />
    </Container>
  )
}

export default Home
