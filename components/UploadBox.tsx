"use client";

import { useRef, useState } from "react";
import { UploadCloud, ImageIcon } from "lucide-react";

export default function UploadBox() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(
    "/mnt/data/9c1dc1a4-e613-4b0b-b8f5-2e809aea2495.png"
  );
  const [caption, setCaption] = useState("");

  function openFile() {
    fileRef.current?.click();
  }

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  }

  function onDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-dashed border-2 border-[#1A2A35] rounded-md p-6 flex flex-col md:flex-row gap-6 items-center bg-[#0D1720]"
    >
      {/* IMAGE PREVIEW */}
      <div className="flex-1 min-h-[140px] flex items-center justify-center bg-[#0F1F2C] rounded-md border border-[#1A2A35]">
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="max-h-40 object-contain rounded-md"
          />
        ) : (
          <div className="text-center text-gray-500">
            <ImageIcon className="w-6 h-6 mx-auto mb-2" />
            No Image Selected
          </div>
        )}
      </div>

      {/* CONTROLS */}
      <div className="w-full md:w-96 flex flex-col gap-4">
        <p className="text-sm font-medium text-gray-200">
          Step 1: Upload Image
        </p>
        <p className="text-xs text-gray-500">
          PNG, JPG, JPEG supported (max 5MB)
        </p>

        <div className="flex gap-2">
          <button
            onClick={openFile}
            className="flex items-center gap-2 px-4 py-2 bg-[#0F1F2C] border border-[#1A2A35] rounded-md text-gray-200 hover:bg-[#132633]"
          >
            <UploadCloud className="w-4 h-4" /> Upload
          </button>

          <button
            onClick={() => {
              setPreview(null);
              setCaption("");
            }}
            className="px-4 py-2 bg-[#132633] text-gray-200 border border-[#1A2A35] rounded-md hover:bg-[#1c3649]"
          >
            Remove
          </button>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />

        <label className="text-sm text-gray-300">Caption (optional)</label>
        <input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a short caption…"
          className="w-full px-3 py-2 border border-[#1A2A35] rounded-md bg-[#0F1F2C] text-gray-200 placeholder-gray-500"
        />
      </div>
    </div>
  );
}
