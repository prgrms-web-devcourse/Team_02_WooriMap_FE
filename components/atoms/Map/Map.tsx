import React, { useEffect, useState } from 'react';
import { Map as KakaoMap, MapProps } from 'react-kakao-maps-sdk';

interface IProps extends MapProps {
  isMain?: boolean;
  width: number | string;
  height: number | string;
  children?: React.ReactNode;
}

const URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY}&libraries=services,clusterer&autoload=false`;

function Map({ children, isMain, width, height, ...props }: IProps) {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    kakao.maps.load(() => {
      setLoaded(true);
    });
  };

  const defaultStyle = {
    width,
    height,
    ...props.style,
  };

  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = URL;
    $script.addEventListener('load', onLoad);
    document.head.appendChild($script);
    return () => {
      $script.remove();
    };
  }, []);

  return loaded ? (
    <KakaoMap
      style={isMain ? defaultStyle : { ...defaultStyle, borderRadius: '1rem' }}
      {...props}
    >
      {children}
    </KakaoMap>
  ) : null;
}

export default Map;
