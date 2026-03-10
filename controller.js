const now = new Date();

const messages = [
  { id: 1, user: "Alice", message: "Hey everyone! Excited to try this mini messageboard.", date: now },
  { id: 2, user: "Bob", message: "Just finished my first Node.js app. Feeling proud!", date: now },
  { id: 3, user: "Charlie", message: "Does anyone know a good way to format dates in EJS?", date: now },
  { id: 4, user: "Dana", message: "I love using express for small projects like this.", date: now },
];

export function getIndex(req, res) {
  res.render("layout", { title: "Mini Messageboard", page: "pages/index", messages });
}

export function getMessage(req, res) {
  const { id } = req.params;
  const post = messages.find((message) => message.id === Number(id));
  res.render("layout", { title: "Message", page: "pages/message", post });
}

export function getForm(req, res) {
  res.render("layout", { title: "New Message Form", page: "pages/form" });
}

export function submitForm(req, res) {
  const { user, message } = req.body;
  const newMessage = { id: messages.length, user, message, date: new Date() };
  messages.push(newMessage);
  res.redirect("/");
}
