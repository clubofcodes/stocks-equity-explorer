import { lazy, Suspense } from 'react';

const Explore = lazy(() => import('@components/explore/Stocks.tsx'));
const HomePage = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Explore />
      </Suspense>
    </div>
  );
};

export default HomePage;
