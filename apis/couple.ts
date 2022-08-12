import { AxiosInstance } from 'axios';

export function updateCoupleInfo({
  instance,
  data,
}: {
  instance: AxiosInstance;
  data: { editDate: string };
}) {
  const res = instance
    .put('/couples', data)
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
    .post('/couples', { code })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
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
    .get('/couples/check')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
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
    .post('/couples/invite')
    .then((response) => response.data.data)
    .catch((error) => {
      const { response } = error;

      console.error(response.message);

      return {
        code: null,
      };
    });

  return res;
}

export function getCoupleInfo({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .get('/couples')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const { response } = error;

      console.error(response.message);

      return {
        data: null,
      };
    });

  return res;
}

export function breakWithUpCouple({ instance }: { instance: AxiosInstance }) {
  const res = instance
    .delete('/couples')
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
