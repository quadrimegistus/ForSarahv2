export default class RequestToZillowComps {
  public zwsid!: string;
  public zpid!: number;
  // Should be range of 1 - 25
  public count!: number;
  public rentZestimate!: boolean;
  public getCompsBaseUri!: string;
  public getCompsFullQueryUri!: string;
}
