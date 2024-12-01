export const getCategoryColor = (catgory: string) => {
  switch (catgory) {
    case "image":
      return "var(--img-color)";
    case "media":
      return "var(--media-color)";
    case "document":
      return "var(--doc-color)";
    default:
      return "var(--other-color)";
  }
};
