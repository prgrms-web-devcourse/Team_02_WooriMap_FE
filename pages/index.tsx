import { DeleteButton } from 'components';

function Home() {
  return (
    <div>
      <DeleteButton
        size="medium"
        src="https://wooriemap.s3.ap-northeast-2.amazonaws.com/images/i1.jpg"
        onClick={() => {
          console.log('시발');
        }}
      />
    </div>
  );
}
export default Home;
