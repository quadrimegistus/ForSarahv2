export default class RequestToZillowDeepSearchResults {
  public zwsid!: string;
  // Should be formatted like: "320 Callandale Ln"
  public address!: string;
  // Should be formatted like: "Durham,NC,27703"
  public citystatezip!: string;
  public rentZestimate?: boolean;
  public getDeepSearchResultsBaseUri!: string;
  public getDeepSearchResultsFullQueryUri!: string;
}
