import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

export class ErrorHandler extends Error {
  constructor(error: Error | AxiosError) {
    super();

    if (error instanceof AxiosError) {
      toast.error(error.response.data.msg);
      return;
    }

    toast.error(error.message);
  }
}
