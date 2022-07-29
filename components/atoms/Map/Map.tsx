import React, { useState } from 'react';
import Script from 'next/script';
import { Map as KakaoMap, MapProps } from 'react-kakao-maps-sdk';

interface IProps extends MapProps {
  width: number | string;
  height: number | string;
  children?: React.ReactNode;
}

const URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY}&libraries=services,clusterer&autoload=false`;

function Map({ children, width, height, ...props }: IProps) {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    kakao.maps.load(() => {
      setLoaded(true);
    });
  };
  return (
    <>
      <Script src={URL} onLoad={onLoad} />
      {loaded && (
        <KakaoMap style={{ width, height, ...props.style }} {...props}>
          {children}
        </KakaoMap>
      )}
    </>
  );
}

export default Map;
