import { Account, Client, ID } from 'appwrite';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.REACT_APP_APPWRITE_END_POINT)
      .setProject(import.meta.env.REACT_APP_APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }
  async createSession(email, password) {
    await this.account
      .createEmailSession(email, password)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
  async createUser(email, password, name) {
    await this.account
      .create(ID.unique(), email, password, name)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
  getUser() {
    return this.account.get();
  }
}

const authService = new AuthService();

export default authService;
