import type { AppProps } from 'next/app';
import { trpc } from '../utils/trpc';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const MyAppComponent = Component as any; // @types/react vs nextjs types issue
  return <MyAppComponent {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
