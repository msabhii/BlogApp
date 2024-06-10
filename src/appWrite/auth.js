import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

//? Creating Class
export class AuthServices {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }

  //* Method to Create Account
  async CreateAccount({ email, password, name }) {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  }
  //* Method to Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite serive :: LoginService :: error", error);
      throw error;
    }
  }
  //* Method to getCurrentUser Account
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: Error =>", error);
      throw error;
    }
  }

  //* Method to Logout
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
      throw error;
    }
  }
}
const authServices = new AuthServices();

export default authServices;
