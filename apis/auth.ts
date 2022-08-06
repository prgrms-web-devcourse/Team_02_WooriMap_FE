import { AxiosError } from 'axios';
import instance from 'apis/instance';
import { IInputState, ISingnUpRes } from 'types';

export async function signup({
  values,
}: {
  values: IInputState;
}): Promise<ISingnUpRes> {
  try {
    const { email, nickName, password } = values;

    const reqBody = {
      email,
      nickName,
      password,
    };

    const data = await instance
      .post<''>('/members/signup', reqBody)
      .then((response) => {
        if (response.status === 201) {
          return {
            message: '',
          };
        }

        const error = response as unknown as AxiosError;
        return error.response?.data;
      });

    return data as ISingnUpRes;
  } catch (error) {
    console.error(error);

    return {
      message: '서버에러',
    };
  }
}
