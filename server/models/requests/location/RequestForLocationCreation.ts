export default class RequestForLocationCreation {
  public streetAddress!: string;
  public municipality!: string;
  public state!: string;
  constructor(RequestBody: any) {
    this.streetAddress = RequestBody['streetAddress'];
    this.municipality = RequestBody['municipality'];
    this.state = RequestBody['state'];
  }
  public checkMongoForDuplicate() {}
  public getMapQuestGeoCoding() {}
  public getZillowChart() {}
  public getZillowComps() {}
  public getZillowDeepComps() {}
  public getZillowDeepSearchResults() {}
  public getZillowRegionChildren() {}
  public getZillowSearchResults() {}
  public getZillowUpdatedPropertyDetails() {}
  public getZillowZestimate() {}
  public createLocationObject() {}
  public postLocationIntoMongo() {}
}
