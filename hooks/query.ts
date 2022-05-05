import { useRouter } from 'next/router';

export const usePageQuery = () => {
  const router = useRouter();
  return { ...router.query };
};
