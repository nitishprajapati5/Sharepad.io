"use client";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function createSlug() {
    try {
      setError(false);
      setLoading(true);

      const res = await axios.post("/api/getCodeId");
      console.log(res);
      router.replace(`/${res.data.res.slug}`);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    createSlug();
  });

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center w-full">
        <Loader2Icon size={48} className="animate-spin" />
        <p>Loading Your Space....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-red-600 mt-2">Failed to create file</p>
        <button
          onClick={createSlug}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
}
