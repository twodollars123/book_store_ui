export const handleLinkGGDrive = (url) => {
  const start = "file/d/";
  const end = "/view";
  const startIndex = url.indexOf(start) + start.length;
  const endIndex = url.indexOf(end, startIndex);
  const fileId = url.substring(startIndex, endIndex);
  const src = `https://drive.google.com/uc?export=view&id=${fileId}`;
  return src;
};
