export default class RequestToZillowDeepComps {
  public zwsid!: string;
  public zpid!: number;
  // Should be range of 1 - 25
  public count!: number;
  public rentZestimate!: boolean;
  public getDeepCompsBaseUri!: string;
  public getDeepCompsFullQueryUri!: string;
}
