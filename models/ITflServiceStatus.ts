interface ITflServiceStatus {
  $type: string;
  id: string;
  name: string;
  modeName: string;
  disruptions: any[];
  created: Date;
  modified: Date;
  lineStatuses: {
    $type: string;
    id: number;
    statusSeverity: number;
    statusSeverityDescription: string;
    created: string;
    validityPeriods: any[]
  }[];
  routeSections: any[]
  serviceTypes: {
    $type: string;
    name: string;
    uri: string
  }[];
  crowding: {
    $type: string;
  }
}

export default ITflServiceStatus
