export default {
  async findAllPosts() {
    try {
      const data = fetch("https://jsonplaceholder.typicode.com/posts");
      return (await data).json();
    } catch (e) {
      return [];
    }
  }
};
