import {useState, useCallback} from "react";
import AlertCircle from "@/icons/alertCircle";
import CheckCircle from "@/icons/checkCircle";
import Close from "@/icons/close";
import File from "@/icons/file";
import truncateName from "@/utils/truncate";

interface FileUploadState {
  file: File | null;
  error: string | null;
  success: boolean;
}

interface FileUploadProps {
  fileState: FileUploadState;
  setFileState: (newState: FileUploadState) => void;
  setIsAnnotating: (state: boolean) => void;
}
const FileUpload = ({
  fileState: {file, error, success},
  setFileState,
  setIsAnnotating,
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const validateFile = useCallback(
    (file: File): boolean => {
      if (!file.type.match("application/pdf")) {
        setFileState({
          file: null,
          error: "Only PDF files are allowed",
          success: false,
        });
        return false;
      }
      return true;
    },
    [setFileState]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile && validateFile(droppedFile)) {
        setFileState({
          file: droppedFile,
          error: null,
          success: true,
        });
      }
    },
    [setFileState, validateFile]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile && validateFile(selectedFile)) {
        setFileState({
          file: selectedFile,
          error: null,
          success: true,
        });
      }
    },
    [setFileState, validateFile]
  );

  const removeFile = useCallback(() => {
    setFileState({
      file: null,
      error: null,
      success: false,
    });
  }, [setFileState]);
  const processFile = () => setIsAnnotating(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          PDF Document Upload
        </h1>

        <div
          className={`relative rounded-lg border-2 border-dashed transition-all duration-200 ease-in-out
            ${
              isDragging
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-white"
            }
            ${success ? "border-green-500 bg-green-50" : ""}
            ${error ? "border-red-500 bg-red-50" : ""}
            p-8 text-center`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
            id="fileInput"
          />

          <div className="space-y-4">
            {!file && (
              <>
                <div className="flex justify-center">
                  <File />
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray-900 font-medium">
                    Drag & drop your PDF here
                  </h3>
                  <p className="text-gray-500 text-sm">or</p>
                  <label
                    htmlFor="fileInput"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200"
                  >
                    Browse Files
                  </label>
                </div>
              </>
            )}

            {file && (
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <CheckCircle />
                    <span className="text-gray-900 font-medium">
                      {truncateName(file.name)}
                    </span>
                  </div>
                  <button
                    onClick={removeFile}
                    aria-label="remove file"
                    className="text-gray-400 hover:text-gray-700 hover:scale-110 transition-colors duration-200"
                  >
                    <Close />
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <AlertCircle />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}
          </div>
        </div>

        {file && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={processFile}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Process PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
