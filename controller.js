const now = new Date();

const messages = [
  { user: "Alice", message: "Hey everyone! Excited to try this mini messageboard.", date: now },
  { user: "Bob", message: "Just finished my first Node.js app. Feeling proud!", date: now },
  { user: "Charlie", message: "Does anyone know a good way to format dates in EJS?", date: now },
  { user: "Dana", message: "I love using express for small projects like this.", date: now },
];

export function getIndex(req, res) {
  res.render("layout", { title: "Mini Messageboard", page: "pages/index", messages });
}
