class ApiClient {
  private baseUrl = 'https://bored-api.firebaseapp.com/';
  private randomPath = 'api/activity';
  private listPath = '/api/activity/list';
  private totalActivities = '10';

  constructor(private windowFetch = fetch) {}

  public async getActivities() {
    const url = `${this.baseUrl}${this.listPath}${this.totalActivities}`;
    const response = await this.windowFetch(url);
    return response.json();
  }

  public async getRandomActivity() {
    const url = `${this.baseUrl}${this.randomPath}`;
    const response = await this.windowFetch(url);
    return response.json();
  }
}

export default ApiClient;
