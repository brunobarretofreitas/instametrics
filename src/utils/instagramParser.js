export default class InstagramParser {

  static getUserInfo(username, userData) {
    const auxData = userData.split('"edge_followed_by":{"count":');
    const data = auxData[1].split("},");

    return {
      username,
      userFollowers: data[0]
    };
  }

}