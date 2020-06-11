const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  const findTask = await Task.findById(req.params.id);
  res.json(findTask);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();
  res.json({ status: "Task saved!" });
});

router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const updateTask = { title, description };
  await Task.findByIdAndUpdate(req.params.id, updateTask);
  res.json({ status: "Task updated!" });
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ status: "Task deleted!" });
});

module.exports = router;
