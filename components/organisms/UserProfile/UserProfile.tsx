import { IUserProfileProps } from 'types/couple';
import { IsCoupleProfile } from './IsCoupleProfile';
import { IsNotCoupleProfile } from './IsNotCoupleProfile';

export function UserProfile({
  isCouple,
  nickName,
  coupleNickName,
  coupleStartingDate,
  ...props
}: IUserProfileProps) {
  if (isCouple)
    return (
      <IsCoupleProfile
        isCouple={isCouple}
        nickName={nickName}
        coupleNickName={coupleNickName}
        coupleStartingDate={coupleStartingDate}
        {...props}
      />
    );

  return (
    <IsNotCoupleProfile isCouple={isCouple} nickName={nickName} {...props} />
  );
}
