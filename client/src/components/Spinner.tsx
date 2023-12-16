'use client';

import { ClipLoader } from 'react-spinners';

export default function Spinner({ loading }: { loading: boolean }) {
  return (
    <ClipLoader
      color={'#FF5C48'}
      loading={loading}
      speedMultiplier={0.5}
      size={25}
    />
  );
}
