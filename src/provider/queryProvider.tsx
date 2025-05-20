import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { showError } from '../lib/toastify';

interface Props {
  children: ReactNode;
}

const queryCache = new QueryCache({
  onError: (error) => {
    showError(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.");
  },
  onSuccess: (data, query) => {
    console.log('Global query success:', data, 'Query:', query.queryKey);
  },
  onSettled: (data, error, query) => {
    console.log('Query set:', query.queryKey, { data, error });
  },
});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 7, 
      refetchOnWindowFocus: false, 
      refetchOnReconnect: true,
    },
  },
});

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
