export const storeFile = async (file: File, path?: string) => {
  const ext = file.name.split(".").pop();
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  let fileName = "";
  if (path) fileName += path;
  fileName += `${Date.now()}-${crypto.randomUUID()}.${ext}`;

  await useStorage("uploads").setItemRaw(fileName, buffer);

  return {
    originalName: file.name,
    size: file.size,
    storedName: fileName,
    mimeType: file.type,
    extension: ext as string,
    path: fileName,
  };
};
