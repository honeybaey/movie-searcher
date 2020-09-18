export default class MovieService {
  _apiKey = "9000047236c3b4a86957e392cead86b6";
  _baseURL = `https://api.themoviedb.org/3`;

  async getResource(url) {
    const res = await fetch(`${this._baseURL}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getFilm(id) {
    const res = await this.getResource(`/movie/${id}?api_key=${this._apiKey}&language=ru-RU`);
    return res;
  }

  async getPerson(query) {
    const res = await this.getResource(`/search/person?api_key=${this._apiKey}&language=ru-RU&query=${query}`);
    return res.results;
  }
}