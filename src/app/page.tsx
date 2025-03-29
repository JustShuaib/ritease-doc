"use client";
import {useState} from "react";
import FileUpload from "@/components/fileUpload";
import FileAnnotate from "@/components/fileAnnotate";
interface FileUploadState {
  file: File | null;
  error: string | null;
  success: boolean;
}
export default function Home() {
  const [isAnnotating, setIsAnnotating] = useState(false);
  const [{file, error, success}, setFileState] = useState<FileUploadState>({
    file: null,
    error: null,
    success: false,
  });
  const fileUrl = file ? URL.createObjectURL(file) : null;

  if (isAnnotating) {
    return file && <FileAnnotate pdfFile={{name: file.name, url: fileUrl}} />;
  }
  return (
    <FileUpload
      fileState={{file, error, success}}
      setFileState={setFileState}
      setIsAnnotating={setIsAnnotating}
    />
  );
}
