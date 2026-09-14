'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';

export default function NotesClient() {
  const search = '';
  
  const { isLoading, isError } = useQuery({
    queryKey: ['notes', search],
    queryFn: () => fetchNotes(search),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <main>
      {}
    </main>
  );
}
