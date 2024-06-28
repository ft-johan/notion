"use client";
import React, { useState } from "react";
import parse from "html-react-parser";
import NovelEditor from "@/components/editor/NovelEditor";
import { Card, CardContent } from "@/components/ui/card";
export default function EditorPage() {
  const [content, setContent] = useState<string | undefined>(undefined);

  return (
    <div className="container p-8 ">
      <h2>Editor will be here</h2>

      <div className="grid grid-cols-2 gap-6">
        <NovelEditor title="Editor Content" setContent={setContent} />
        <div className="">
          <Card>
            <CardContent>
              <h2 className="pt-4">Content Preview</h2>
              <div className="prose lg:prose-xl">{parse(`${content}`)}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
