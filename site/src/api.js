import { nanoid } from "nanoid";
import axios from "axios";

export class Book {
  constructor({
    id,
    volumeInfo: { title, authors = [], description, imageLinks, infoLink }
  }) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    /** @type {string} */
    this.description = description;
    this.image = imageLinks ? imageLinks.thumbnail : null;
    this.link = infoLink;
  }
}

export class SearchResult {
  constructor({ totalItems = 0, items = [] }) {
    this.totalItems = totalItems;
    this.items = items.map(i => new Book(i));
  }
}

const api = {
  googleApiUri: "https://www.googleapis.com/books/v1/volumes?q=",
  uid:
    localStorage.uid ||
    (() => {
      let nid = nanoid();
      localStorage.uid = nid;
      return nid;
    })(),
  /**
   *
   * @param {string} searchString
   * @returns {SearchResult}
   */
  search: async function(searchString) {
    const result = await axios.get(this.googleApiUri + searchString);
    return new SearchResult(result.data);
  },
  /**
   * @returns {Promise<Book[]>}
   */
  getSaved: async function() {
    const result = await axios.get("/api/" + this.uid);
    return result.data.map(b => new Book(b));
  },
  /**
   *
   * @param {Book} book
   */
  save: async function(book) {
    console.log("saving");
    await axios.put("/api/" + this.uid, book);
  },
  /**
   *
   * @param {Book} book
   * @returns {boolean}
   */
  delete: async function(book) {
    console.log("deleting");
    const { data } = await axios.delete(`/api/${this.uid}/${book.id}`);
    console.log("Deletd", data);
  }
};

export default api;
