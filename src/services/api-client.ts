export class ApiClient {
  private readonly baseUrl: string = 'https://bored-api.firebaseapp.com/';
  private readonly randomPath: string = 'api/activity';
  private readonly listPath: string = 'api/activity/list';
  private readonly totalActivities: string = '/100';

  public getActivities = async () => {
    const url = `${this.baseUrl}${this.listPath}${this.totalActivities}`;
    const response = await fetch(url);
    return response.json();
  };

  public getRandomActivity = async () => {
    const url = `${this.baseUrl}${this.randomPath}`;
    const response = await fetch(url);
    return response.json();
  };
}
