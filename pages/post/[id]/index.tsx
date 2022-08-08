import { PostTemplate, ImageViewer } from 'components';
import { PostBody } from 'components/organisms/PostBody';

const testPost = {
  title: '나의 멋진 제목!!',
  date: '2022.08.07',
  tagList: [
    { name: '멋진태그', color: '#9d22a6' },
    { name: '강한태그', color: '#bad138' },
    { name: '슈퍼태그', color: '#666cd9' },
    { name: '프로태그', color: '#dd8648' },
    { name: '택택그', color: '#ac536c' },
  ],
  content:
    '모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.',
  location: {
    latitude: 37.335887,
    longitude: 126.584063,
  },
};

export default function PostDetail() {
  const { title, date, tagList, content, location } = testPost;
  return (
    <PostTemplate
      imageSection={<ImageViewer />}
      contentSection={
        <PostBody
          title={title}
          date={date}
          tagList={tagList}
          content={content}
          location={location}
        />
      }
    />
  );
}
