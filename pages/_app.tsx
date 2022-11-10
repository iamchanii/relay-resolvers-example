import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEnvironment } from '../environment';
import { RelayEnvironmentProvider } from 'react-relay';
import { Suspense } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const environment = useEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="">
        <Component {...pageProps} />;
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
