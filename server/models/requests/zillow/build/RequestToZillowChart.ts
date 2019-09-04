export default class RequestToZillowChart {
  public zwsid!: string;
  public zpid!: number;
  // Should be enum of Dollar & Percent
  public unitType!: string;
  // Should be range of 1 - 600
  public width!: number;
  // Should be range of 1 - 300
  public height!: number;
  // Should be enum of 1years, 5years & 10years
  public chartDuration!: Enumerator;
  public getChartBaseUri!: string;
  public getChartFullQueryUri!: string;
}
