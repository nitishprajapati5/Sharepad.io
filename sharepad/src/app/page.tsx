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

