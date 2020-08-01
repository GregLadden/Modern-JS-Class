class Github {
  constructor() {
    this.client_id = "eb4898992a345596480f";
    this.client_secret = "35772f508bac510a350e37ac2a6e3ebedaafe100";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
