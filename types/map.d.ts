export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IMapMarker {
  position: ICoordinates;
  content: string;
}
