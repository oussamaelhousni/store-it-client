import _ from "underscore";
import { create } from "zustand";
import { UploadedFile } from "@/types/uploaded-file";

type UplaodedFilesState = {
  uploadedFiles: UploadedFile[];
  filesAborter: { [key: string]: any };
  appendFile: (file: File) => void;
  removeFile: (fileId: string) => void;
  updateFile: (fileId: string, file: Partial<UploadedFile>) => void;
  abortFile: (fileId: string) => void;
  associateAborter: (fileId: string, aborter: any) => void;
};

export const useFileManager = create<UplaodedFilesState>((set) => {
  return {
    uploadedFiles: [],
    filesAborter: {},
    appendFile: (file: File) =>
      set((state) => {
        const fileUploaded: UploadedFile = {
          filename: file.name,
          uploadPercentage: 0,
          uploadStatus: "uploading",
          id: `${file.name}${file.size}`,
        };

        return {
          uploadedFiles: [...state.uploadedFiles, fileUploaded],
        };
      }),
    removeFile: (fileId) => {
      return set((state) => ({
        uploadedFiles: state.uploadedFiles.filter((file) => file.id !== fileId),
        filesAborter: _.omit(state.filesAborter, fileId),
      }));
    },
    updateFile: (fileId: string, fieldsToUpdate: Partial<UploadedFile>) => {
      return set((state) => {
        return {
          uploadedFiles: state.uploadedFiles.map((file) => {
            if (file.id === fileId) {
              return { ...file, ...fieldsToUpdate };
            }
            return file;
          }),
        };
      });
    },
    abortFile: (fileId: string) => {
      return set((state) => {
        const aborter = state.filesAborter[fileId];

        if (!aborter) return state;

        aborter.abort();
        return {
          filesAborter: _.omit(state.filesAborter, fileId),
          uploadedFiles: state.uploadedFiles.filter(
            (file) => file.id !== fileId
          ),
        };
      });
    },
    associateAborter: (fileId: string, aborter: any) => {
      return set((state) => {
        return {
          filesAborter: { ...state.filesAborter, [fileId]: aborter },
        };
      });
    },
  };
});
