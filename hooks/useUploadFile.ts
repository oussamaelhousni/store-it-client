import { useMutation } from "react-query";
import { httpClient } from "@/utils/http-client";
import { useFileManager } from "./useFileManger";
import axios from "axios";
function useUploadFile() {
  const { appendFile, updateFile, associateAborter } = useFileManager();

  return useMutation({
    onMutate: (form: FormData) => {
      const file = form.get("file");
      if (!file) return;
      appendFile(file as File);
    },
    mutationFn: async (form: FormData) => {
      // when file is  uploading we associate an aborter se we can abort the request later
      const file = form.get("file") as File;
      const fileId = `${file.name}${file.size}`;
      const aborter = new AbortController();
      associateAborter(fileId, aborter);

      const res = await httpClient.post("/api/v1/medias/upload", form, {
        signal: aborter.signal,
        onUploadProgress: (event) => {
          if (event.total) {
            const percentCompleted = Math.round(
              (event.loaded * 100) / event.total
            );
            updateFile(fileId, {
              uploadPercentage: percentCompleted,
            });
          }
        },
      });
      return res.data;
    },
    onError: (error) => {
      console.log("aborted", axios.isCancel(error));
    },
    onSuccess: (data) => {
      console.log("data", data);
    },
  });
}

export default useUploadFile;
