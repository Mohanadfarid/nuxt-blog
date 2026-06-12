const config = useRuntimeConfig();

export const constructUrlbyFilePath =  (path: string) => {
  return `${config.public.baseUrl}/uploads/${path}`;
};
