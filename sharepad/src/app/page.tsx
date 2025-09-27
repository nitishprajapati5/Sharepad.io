// // "use client";
// // import { useState, useMemo } from "react";
// // import ReactCodeMirror from "@uiw/react-codemirror";
// // import { javascript } from "@codemirror/lang-javascript";
// // import { python } from "@codemirror/lang-python";
// // import { cpp } from "@codemirror/lang-cpp";
// // import { css } from "@codemirror/lang-css";
// // import { html } from "@codemirror/lang-html";
// // import { creamyTheme } from "./_components/_ComponentConfiguration/creamyTheme";
// // import { languageSelector } from "./_components/_ComponentConfiguration/languageConfiguration";
// // import { Code2, Play, Share, UserPlus } from "lucide-react";
// // "use client"
// // import { Loader2Icon } from "lucide-react"
// // import { useRouter } from "next/navigation"
// // import { useSlug } from "./services/Mutation"

// // const languageMap: Record<string, () => any> = {
// //   javascript,
// //   python,
// //   cpp,
// // };

// // export default function Home() {
// //   const [language, setLanguage] = useState("javascript");
// //   const [code, setCode] = useState(`console.log("Hello JavaScript")`);

// //   const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const selectedLang = e.target.value;
// //     setLanguage(selectedLang);
// //     const starterCode = languageSelector(selectedLang);
// //     setCode(starterCode);
// //   };

// //   const languageExtension = useMemo(() => {
// //     const fn = languageMap[language];
// //     return fn ? fn() : javascript();
// //   }, [language]);

// //   return (
// //     <div className="h-screen w-full p-4 flex flex-col">
// //       {/* Header */}
// //       <div className="flex flex-row items-center justify-between mb-4">
// //         <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
// //           <Code2 className="w-7 h-7 text-amber-500" />
// //           Share Pad.sh
// //         </h1>
// //       </div>

// //       {/* Action buttons & language selector */}
// //       <div className="mb-4 flex items-center gap-3 flex-wrap">
// //         <button
// //           type="button"
// //           className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-2xl px-5 py-2.5 shadow-md transition-transform transform hover:scale-105"
// //         >
// //           <Play className="w-5 h-5" /> Run
// //         </button>

// //         <button
// //           type="button"
// //           className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-2xl px-5 py-2.5 shadow-md transition-transform transform hover:scale-105"
// //         >
// //           <Share className="w-5 h-5" /> Share
// //         </button>

// //         <button
// //           type="button"
// //           className="flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 font-semibold rounded-2xl px-5 py-2.5 shadow-md transition-transform transform hover:scale-105"
// //         >
// //           <UserPlus className="w-5 h-5" /> Collaborate
// //         </button>

// //         <label className="ml-4 font-medium text-gray-700">Language:</label>
// //         <select
// //           value={language}
// //           onChange={handleLanguageChange}
// //           className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out cursor-pointer"
// //         >
// //           {Object.keys(languageMap).map((lang) => (
// //             <option key={lang} value={lang} className="bg-white text-gray-800">
// //               {lang.charAt(0).toUpperCase() + lang.slice(1)}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="flex flex-row border rounded-lg overflow-hidden h-full shadow-md">
// //         <div className="flex-1">
// //           <ReactCodeMirror
// //             value={code}
// //             extensions={[languageExtension]}
// //             onChange={(value) => setCode(value)}
// //             theme={creamyTheme}
// //           />
// //         </div>
// //       </div>

// //       {/* Input / Output section */}
// //       <div className="flex flex-row gap-4 mt-4">
// //         <div className="w-1/2 p-2 border rounded-lg border-gray-300 bg-gray-50 shadow-sm">
// //           <label className="block mb-1 font-medium text-gray-700">Input:</label>
// //           <textarea className="w-full rounded-lg  p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
// //         </div>

// //         <div className="w-1/2 p-2 border rounded-lg border-gray-300 bg-gray-50 shadow-sm">
// //           <label className="block mb-1 font-medium text-gray-700">
// //             Output:
// //           </label>
// //           <textarea className="w-full rounded-lg  p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useRouter } from "next/navigation";
// import { Loader2Icon } from "lucide-react";
// import { useEffect } from "react";
// import { useSlug } from "./services/Mutation";

// export default function Home() {
//   const router = useRouter();

//   const mutatation = useSlug();

//   // Redirect safely after mutation succeeds

//   // mutatation.mutate()
  
//   const createFile = () => {
//     mutatation.mutate();
//   }

//   if (mutatation.isPending) {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center w-full">
//         <Loader2Icon size={48} className="animate-spin" />
//         <p>Loading Your Space....</p>
//       </div>
//     );
//   }

//   if(mutatation.isSuccess){
//     console.log(mutatation.data.res.slug)
//     router.push(`/${mutatation.data.res.slug}`)
//   }
  
//   useEffect(() => {
//     if (mutatation.isSuccess) {
//       console.log(mutatation.data.res.slug);
//       router.push(`/${mutatation.data.res.slug}`);
//     }
//   }, [mutatation.isSuccess, mutatation.data.res.slug, router]);

//   if (mutatation.isError) {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center">
//         <p className="text-red-600 mt-2">Failed to create file</p>
//         <button
//           onClick={() => createFile()}
//           className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     // <div className="min-h-screen flex flex-col justify-center items-center">
//     //   <button
//     //     onClick={() => createFile()}
//     //     className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//     //   >
//     //     Create New File
//     //   </button>
//     //   {isError && <p className="text-red-600 mt-2">Failed to create file</p>}
//     // </div>
//     <>
//       <button onClick={() => mutatation.mutate()}>Mutate</button>
//     </>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { useSlug } from "./services/Mutation";

export default function Home() {
  const router = useRouter();
  const mutatation = useSlug();

  useEffect(() => {
    mutatation.mutate();
  }, []);

  if (mutatation.isPending) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center w-full">
        <Loader2Icon size={48} className="animate-spin" />
        <p>Loading Your Space....</p>
      </div>
    );
  }

  if (mutatation.isSuccess) {
    // Redirect after success
    router.push(`/${mutatation.data.res.slug}`);
    //return null; // avoid double render
  }

  if (mutatation.isError) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-red-600 mt-2">Failed to create file</p>
        <button
          onClick={() => mutatation.mutate()}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
}

