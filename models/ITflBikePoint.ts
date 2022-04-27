interface ITflBikePoint {
  $type: string;
  id: string;
  url: string;
  commonName: string;
  placeType: string;
  additionalProperties: any[];
  children: [];
  childrenUrls: [];
  lat: number;
  lon: number;
}

export default ITflBikePoint
