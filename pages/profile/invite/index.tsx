import { useEffect, useState } from 'react';
import { ProfileTemplate, CoupleInviteForm } from 'components';
import { getCoupleCode } from 'apis/couple';
import { withNotCoupleRoute } from 'hocs';
import { useAxiosInstance } from 'hooks';

function CoupleInvite() {
  const [code, setCode] = useState<string | null>(null);
  const instance = useAxiosInstance();

  useEffect(() => {
    (async () => {
      const response = await getCoupleCode({ instance });

      if (response.code) {
        setCode(response.code);
      }
    })();
  }, []);

  return (
    <ProfileTemplate>
      <CoupleInviteForm code={code} />
    </ProfileTemplate>
  );
}

export default withNotCoupleRoute(CoupleInvite);
