'use client';

import Modal from '@/components/Modal/Modal';
import NotePreview from './NotePreview.client';
import { useRouter } from 'next/navigation';

export default function NotePreviewModalPage() {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview />
    </Modal>
  );
}
