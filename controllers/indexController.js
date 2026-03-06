export default function getIndex(req, res) {
  res.render("layout", { title: "Home", page: "pages/index" });
}
