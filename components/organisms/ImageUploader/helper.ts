export const fetchFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name } = e.target;
  const file = e.target.files![0];

  try {
    const formData = new FormData();

    formData.append('file', file);

    const response = await fetch('https://dev.woorimap.p-e.kr/api/image', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => console.log(err));

    console.log(response);

    // const data = await response.json();

    // formData.append('upload_preset', 'my-uploads');

    // const res = await fetch(
    //   'https://api.cloudinary.com/v1_1/dq4j0pffj/image/upload',
    //   {
    //     method: 'POST',
    //     body: formData,
    //   },
    // );

    // const data = await res.json();

    return {
      name,
      data,
    };
  } catch (error: unknown) {
    console.error(error);

    return {
      name,
      data: '',
    };
  }
};
