export default (prev, next, sortBy, sortUp) => {
  if (!prev[sortBy] || !next[sortBy]) return 0;

  if (sortUp) {
    if (prev[sortBy] > next[sortBy]) {
      return -1;
    }
    if (prev[sortBy] < next[sortBy]) {
      return 1;
    }

    return 0;
  } else {
    if (prev[sortBy] < next[sortBy]) {
      return -1;
    }
    if (prev[sortBy] > next[sortBy]) {
      return 1;
    }
  }
};
