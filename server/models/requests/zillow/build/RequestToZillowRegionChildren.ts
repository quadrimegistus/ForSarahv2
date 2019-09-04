export default class RequestToZillowRegionChildren {
  public zwsid!: string;
  public regionId?: number;
  public state!: string;
  public county?: string;
  public city?: string;
  // Should be enum of: state, county, city, zipcode, or neighborhood.
  public childType?: Enumerator;
  public getRegionChildrenBaseUri!: string;
  public getRegionChildrenFullQueryUri!: string;
}
