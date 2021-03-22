const { Router } = require("express");
// const config = require("config");
const Favourite = require("../src/models/Favourite");
const auth = require("../middleware/auth.middleware");

const router = Router();

// router.post("/add", auth, async (req, res) => {
//   try {
//
//     const { name } = req.body;
//
//     const existing = await Favourite.findOne({ name });
//
//     if (existing) {
//       return res.json({ favourite: existing });
//     }
//   } catch (e) {
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// });

router.get("/", auth, async (req, res) => {
  try {
    const favs = await Favourite.find({ owner: req.user.userId });
    res.json(favs);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const favs = await Favourite.findById(req.params.id);
    res.json(favs);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
