/* eslint-disable @typescript-eslint/no-explicit-any */
export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  message?: string;
  statusCode?: number;
};

export type ResponseErrorType = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErorMessage[];
};

export type IGenericErorMessage = {
  path: string | number;
  message: string;
};
