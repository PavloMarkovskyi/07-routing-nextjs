import SidebarNotes from '@/app/notes/filter/@sidebar/default';
import css from './LayoutNotes.module.css';

interface Props {
  children: React.ReactNode;
}

export default function NotesLayout({ children }: Props) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <section className={css.notesWrapper}>{children}</section>
    </div>
  );
}
