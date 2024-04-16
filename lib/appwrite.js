import { Account, Avatars, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.efegift.aora",
  projectId: "661dc31c84ddb4d4533f",
  databaseId: "661dc523ddbe2741b524",
  userCollectionId: "661dc56adf678ae3c60c",
  videoCollectionId: "661dc5beaf8118b88f81",
  storageId: "661dc8615bf9f1d044bb",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (username, email, password) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      username,
      email,
      password
    );

    if (!newAccount) throw new Error();

    const avatarUrl = avatars.getInitials(username);
    
    await signIn();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
