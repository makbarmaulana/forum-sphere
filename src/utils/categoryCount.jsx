export const countThreadsByCategory = (threads) => {
  const counts = {};
  threads.forEach((thread) => {
    if (thread.category) {
      counts[thread.category] = counts[thread.category] || 0;
      counts[thread.category] += 1;
    }
  });
  return counts;
};
