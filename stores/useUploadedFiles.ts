import { UploadedFile } from "@/types/uploaded-file";
import { create } from "zustand";
import _ from "underscore";

type UplaodedFilesState = {
  uploadedFiles: UploadedFile[];
  filesAborter: { [key: string]: AbortController };
  appendFile: (file: UploadedFile) => void;
  removeFile: (fileId: string) => void;
};

export const useUplaodedFiles = create<UplaodedFilesState>((set) => {
  return {
    uploadedFiles: [
      {
        filename: "string",
        uploadPercentage: 50,
        remainingTime: 20,
        _id: "id1",
      },
    ],
    filesAborter: {},
    appendFile: (file) =>
      set((state) => ({
        uploadedFiles: [...state.uploadedFiles, file],
        filesAborter: {
          ...state.filesAborter,
          [file._id]: new AbortController(),
        },
      })),
    removeFile: (fileId) => {
      return set((state) => ({
        uploadedFiles: state.uploadedFiles.filter(
          (file) => file._id !== fileId
        ),
        filesAborter: _.omit(state.filesAborter, fileId),
      }));
    },
  };
});
