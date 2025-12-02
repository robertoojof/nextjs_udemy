import Container from '@/components/Container';
import Header from '@/components/Header';
import PostsList from '@/components/PostsList';

export default function Home() {
  return (
    <Container>
      <Header title='My Simple Blog' />
      <PostsList />
    </Container>
  );
}
