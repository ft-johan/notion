import React from "react";
import { Editor } from "novel";
import { type Editor as TipTapEditor } from "@tiptap/core";


type NovelEditorProps = {
  setContent: any;
  title: string;
};
export default function NovelEditor({ setContent, title }: NovelEditorProps) {
  return (
    <div className="">
      
        
        <Editor
          defaultValue={{
            type: "doc",
            content: [],
            // content: content as JSONContent[] | undefined,
          }}
          onDebouncedUpdate={(editor?: TipTapEditor) => {
            setContent(editor?.getHTML());
          }}
          disableLocalStorage={true}
          className="bg-black"
        />
      
    </div>
  );
}
