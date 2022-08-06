import { PostTemplate, ImageUploader, PostWrite } from 'components';

export default function PostCreate() {
  return (
    <PostTemplate
      imageSection={<ImageUploader />}
      contentSection={<PostWrite />}
    />
  );
}
