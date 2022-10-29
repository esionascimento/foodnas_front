import type { NextPage } from 'next';
import { HeadPage } from '@Components/Head';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  });

  return (
    <Box>
      <HeadPage title={'FoodNas'} content={'home'} key={'foodnas-home'} />
    </Box>
  );
};

export default Home;
