export const sortNotes = (a, b) =>
  new Date(a.createdAt) < new Date(b.createdAt) ? 1 : new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 0
