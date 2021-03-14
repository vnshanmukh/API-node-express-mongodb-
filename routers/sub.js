const express = require("express");
const router = require("express").Router();
const SUB = require("../models/sub");

router.get("/:id", async (req, res) => {
  try {
    const subs = await SUB.find();
    if (!subs) throw Error("No items");
    res.status(200).json(subd);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  const newsub = new SUB(req.body);
  try {
    const sub = await newsub.save();
    if (!sub) throw console.error("something wrong");
    res.status(200).json(sub);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.delete("/", async (req, res) => {
  try {
    const sub = await SUB.findByIdAndDelete(req.params.id);
    if (!subs) throw Error("No sub found");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const sub = await SUB.findByIdAndUpdate(req.params.id, req.body);
    if (!sub) throw Error("Something went wrong while updating");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
