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

export function getForm(req, res) {
  res.render("layout", { title: "New Message Form", page: "pages/form" });
}

export function submitForm(req, res) {
  const { user, message } = req.body;
  const newMessage = { user, message, date: new Date() };
  messages.push(newMessage);
  res.redirect("/");
}
