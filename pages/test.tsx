import { PostTemplate, ImageViewer } from 'components';

export default function Test() {
  return (
    <PostTemplate
      imageSection={<ImageViewer />}
      contentSection={<div>B</div>}
    />
  );
}
