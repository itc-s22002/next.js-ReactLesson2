import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const Home = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero
        title='Blog'
        subtitle='React Posts'
      />
    </Container>
  )
}

export default Home
