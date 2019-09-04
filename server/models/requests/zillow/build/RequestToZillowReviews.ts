export default class RequestToZillowReviews {
  public zwsid!: string;
  public screenname?: string;
  public email?: string;
  // Range of 3 - 10
  public count?: number;
  // Should be enum of: xml & json
  public output?: Enumerator;
  public returnTeamMemberReviews?: boolean;
  public getReviewsBaseUri!: string;
  public getReviewsFullQueryUri!: string;
}
