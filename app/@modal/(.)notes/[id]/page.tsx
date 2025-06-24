import { fetchNoteById } from '@/lib/api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import NotePreviewModal from './NotePreview.client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreviewModalPage({ params }: PageProps) {
  const resolvedParams = await params;
  const noteId = Number(resolvedParams.id);

  if (isNaN(noteId)) throw new Error('Invalid note ID');

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  return (
    <NotePreviewModal id={noteId} dehydratedState={dehydrate(queryClient)} />
  );
}
