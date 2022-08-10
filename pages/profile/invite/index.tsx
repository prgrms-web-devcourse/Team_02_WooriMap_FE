import { useEffect, useState } from 'react';
import { ProfileTemplate, CoupleInviteForm } from 'components';
import { withCoupleRoute } from 'hocs';
import { getCoupleCode } from 'apis/couple';
import { useAxiosInstance } from 'hooks';

function CoupleInvite() {
  const [code, setCode] = useState<string | null>(null);
  const instance = useAxiosInstance();

  useEffect(() => {
    (async () => {
      const {
        data: { code: coupleCode },
      } = await getCoupleCode({ instance });
      setCode(coupleCode);
    })();
  }, []);

  return (
    <ProfileTemplate>
      <CoupleInviteForm code={code} />
    </ProfileTemplate>
  );
}

export default withCoupleRoute(CoupleInvite);
