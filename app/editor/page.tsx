"use client";
import React, { useState } from "react";
import NovelEditor from "@/components/editor/NovelEditor";
export default function EditorPage() {
  const [content, setContent] = useState<string | undefined>(undefined);

  return (
    <div className="container ">
      

     
      <NovelEditor title="Editor" setContent={setContent}/>
    </div>
  );
}
