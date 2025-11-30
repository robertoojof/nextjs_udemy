import Container from '@/components/Container';
import PostsList from '@/components/PostsList';

export default function Home() {
  return (
    <Container>
      <h1 className='text-3xl font-bold underline'>Posts</h1>
      
      <PostsList />
    </Container>
  );
}
