'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import css from './NotePreview.module.css';

export default function NotePreview() {
  const { id } = useParams();
  const noteId = Number(id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !!noteId,
  });

  if (!noteId) return <p>Invalid note ID</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Note not found</p>;

  return (
    <div className={css.preview}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <span className={css.tag}>{data.tag}</span>
    </div>
  );
}
