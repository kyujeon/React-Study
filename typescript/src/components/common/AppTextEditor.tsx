import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { ko } from "@blocknote/core/locales";

function AppTextEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    // 한국어 패치
    dictionary: ko,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}

export { AppTextEditor };
