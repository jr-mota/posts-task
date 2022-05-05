export default (post, searchText) => {
  if (post.title.includes(searchText) || post.body.includes(searchText)) {
    return true;
  } else {
    return false;
  }
};
