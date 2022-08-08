export const fetchFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name } = e.target;
  const file = e.target.files![0];

  try {
    const formData = new FormData();

    formData.append('file', file);

    formData.append('upload_preset', 'my-uploads');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dq4j0pffj/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    );

    const data = await res.json();

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
