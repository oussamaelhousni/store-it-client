export type UploadedFile = {
  filename: string;
  uploadPercentage: number;
  uploadStatus: "idle" | "uploading" | "success" | "error";
  id: string;
};
