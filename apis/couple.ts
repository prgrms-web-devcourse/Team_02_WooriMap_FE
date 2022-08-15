import { AxiosInstance } from 'axios';
import { IApiResponse } from 'types/api';
import { ITokenSet } from 'types/auth';
import { ICoupleInfo } from 'types/couple';

interface ICoupleCheckResponse {
  accessToken: string;
  isCouple: boolean;
}

export async function updateCoupleInfo({
  instance,
  data,
}: {
  instance: AxiosInstance;
  data: { editDate: string };
}) {
  const res = instance
    .put<IApiResponse<{ startDate: string }>>('/couples', data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: null,
      };
    });

  return res;
}

export function getLinkCouple({
  instance,
  code,
}: {
  instance: AxiosInstance;
  code: string;
}) {
  const res = instance
    .post<IApiResponse<ITokenSet>>('/couples', { code })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: {
          accessToken: null,
        },
      };
    });

  return res;
}

export function getCheckIsCoupled({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .get<IApiResponse<ICoupleCheckResponse>>('/couples/check')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return {
        data: {
          accessToken: null,
        },
      };
    });

  return res;
}

export function getCoupleCode({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .post<IApiResponse<{ code: string }>>('/couples/invite')
    .then((response) => response.data.data)
    .catch((error) => {
      console.error(error);

      return {
        code: null,
      };
    });

  return res;
}

export function getCoupleInfo({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .get<IApiResponse<ICoupleInfo>>('/couples')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);

      return {
        data: null,
      };
    });

  return res;
}

export function breakUpWithCouple({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .delete<IApiResponse<ITokenSet>>('/couples')
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      const { response } = error;

      console.error(response.message);

      return null;
    });

  return res;
}
