"use client";
import { useState, useMemo } from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { creamyTheme } from "../_components/_ComponentConfiguration/creamyTheme";
import { languageSelector } from "../_components/_ComponentConfiguration/languageConfiguration";
import { Code2, Play, Share, UserPlus } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "next/navigation";


const languageMap: Record<string, () => any> = {
  javascript,
  python,
  cpp,
};

export default function Home() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(`console.log("Hello JavaScript")`);
  const {slug} = useParams()


  console.log("Slug:", slug)

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    const starterCode = languageSelector(selectedLang);
    setCode(starterCode);
  };

  const languageExtension = useMemo(() => {
    const fn = languageMap[language];
    return fn ? fn() : javascript();
  }, [language]);

  const handleShareClick = async () => {
    try{

      const promise = axios.post('/api/shareCode',
        {
          slug: slug,
        }
      );

      toast.promise(
       promise,
        {
          loading: 'Creating Shareable Link...',
          success: (res) => {
            console.log(res)
            const slug = res.data.slug;
            const shareableLink = `${window.location.origin}/share/${slug}`;
            navigator.clipboard.writeText(shareableLink);
            return 'Link Copied to Clipboard!';
          },
          error: 'Error creating link. Please try again.',
      }
      )

      await promise

    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="h-screen w-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <Code2 className="w-7 h-7 text-amber-500" />
          Share Pad.sh
        </h1>
      </div>

      {/* Action buttons & language selector */}
      <div className="mb-4 flex items-center gap-3 flex-wrap">
        <button
          type="button"
          className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-2xl px-5 py-2.5 shadow-md transition-transform transform hover:scale-105"
        >
          <Play className="w-5 h-5" /> Run
        </button>

        <button
          type="button"
          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl px-5 py-2.5 shadow-md transition-transform transform hover:scale-105"
        >
          <Share className="w-5 h-5" onClick={handleShareClick} /> Share
        </button>

        <button
          type="button"
          className="flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 font-semibold rounded-2xl px-5 py-2.5 shadow-md transition-transform transform hover:scale-105"
        >
          <UserPlus className="w-5 h-5" /> Collaborate
        </button>

        <label className="ml-4 font-medium text-gray-700">Language:</label>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out cursor-pointer"
        >
          {Object.keys(languageMap).map((lang) => (
            <option key={lang} value={lang} className="bg-white text-gray-800">
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row border rounded-lg overflow-hidden h-full shadow-md">
        <div className="flex-1">
          <ReactCodeMirror
            value={code}
            extensions={[languageExtension]}
            onChange={(value) => setCode(value)}
            theme={creamyTheme}
          />
        </div>
      </div>

      {/* Input / Output section */}
      <div className="flex flex-row gap-4 mt-4">
        <div className="w-1/2 p-2 border rounded-lg border-gray-300 bg-gray-50 shadow-sm">
          <label className="block mb-1 font-medium text-gray-700">Input:</label>
          <textarea className="w-full rounded-lg  p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
        </div>

        <div className="w-1/2 p-2 border rounded-lg border-gray-300 bg-gray-50 shadow-sm">
          <label className="block mb-1 font-medium text-gray-700">
            Output:
          </label>
          <textarea className="w-full rounded-lg  p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none" />
        </div>
      </div>
    </div>
  );
}
