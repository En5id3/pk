import PageHeader from '../components/PageHeader';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Insights & Articles"
        title="The PebbleKart Blog"
        subtitle="Explore our articles on hypnotherapy, mental wellness, and personal growth."
      />
      <Blog />
    </>
  );
}
