import React, { useState } from 'react';
import Script from 'next/script';
import { Map as KakaoMap, MapProps } from 'react-kakao-maps-sdk';

interface Props extends MapProps {
  width: number | string;
  height: number | string;
  children?: React.ReactNode;
}

function Map({ children, width, height, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&libraries=services&libraries=clusterer&autoload=false`}
        onLoad={() => {
          window.kakao.maps.load(() => {
            setLoaded(true);
          });
        }}
      />
      {loaded && (
        <KakaoMap style={{ width, height, ...props.style }} {...props}>
          {children}
        </KakaoMap>
      )}
    </>
  );
}

export default Map;
