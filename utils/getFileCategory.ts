export const getFileType = (
  fileName: string
): "media" | "document" | "image" | "other" => {
  const mediaExtensions = ["mp4", "mp3", "wav", "mov", "avi", "mkv"];
  const documentExtensions = [
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
  ];
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "svg",
    "tiff",
    "webp",
  ];
  const fileExtension = fileName.split(".").pop()?.toLowerCase();
  if (!fileExtension) {
    return "other";
  }

  if (mediaExtensions.includes(fileExtension)) {
    return "media";
  } else if (documentExtensions.includes(fileExtension)) {
    return "document";
  } else if (imageExtensions.includes(fileExtension)) {
    return "image";
  } else {
    return "other";
  }
};
