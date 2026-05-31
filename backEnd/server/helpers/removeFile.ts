export const removeFile = async (fileName: string) => {
  return useStorage("uploads").removeItem(fileName);
};
