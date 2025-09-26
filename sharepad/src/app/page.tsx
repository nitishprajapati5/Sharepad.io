"use client";
import { useState, useMemo } from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { EditorView } from "@uiw/react-codemirror";
import { creamyTheme } from "./_components/_ComponentConfiguration/creamyTheme";

const languageMap: Record<string, () => any> = {
  javascript,
  python,
  html,
  css,
  cpp,
};

export default function Home() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Start Coding");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    setCode(""); // optional: clear code when switching
  };

  const languageExtension = useMemo(() => {
    const fn = languageMap[language];
    return fn ? fn() : javascript();
  }, [language]);

  return (
    <div className="h-screen w-full p-4 flex flex-col">
      <div className="flex flex-row">Share Pad.sh</div>
      <div className="mb-2 flex items-center gap-2">
        <label>Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition  duration-200 ease-in-out cursor-pointer"
        >
          {Object.keys(languageMap).map((lang) => (
            <option key={lang} value={lang} className="bg-white text-gray-800">
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row border rounded overflow-hidden h-full">
        {/* Editor */}
        <div className="flex-1">
          <ReactCodeMirror
            value={code}
            extensions={[languageExtension]}
            onChange={(value) => setCode(value)}
            theme={creamyTheme}
          />
        </div>

        {/* Input box */}
      </div>
      <div className="flex flex-row h-[300px]">
        <div className="w-64 p-2  border-gray-300 dark:border-gray-700 bg-gray-50">
          <label>Input:</label>
          <textarea className="w-full rounded h-full focus:outline-none" />
        </div>

        {/* Server controls */}
        <div className="w-64 p-2 border-gray-300 dark:border-gray-700 bg-gray-50">
          <label>Output</label>
          <textarea className="w-full rounded h-full focus:outline-none" />
        </div>
      </div>

      {/* <div className="flex flex-row border rounded overflow-hidden">
        <ReactCodeMirror
          value={code}
          extensions={[languageExtension]}
          onChange={(value) => setCode(value)}
          className="dark:bg-blue-500"
          theme={creamyTheme}
        />
        <div>
          input
        </div>
        <div>
          connect to server
        </div>
      </div> */}
    </div>
  );
}
