const Task = require("../models/task.model");

async function getTasks(req, res) {
  const tasks = await Task.find();

  res.json({
    ok: true,
    data: tasks
  });
}

async function createTask(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      ok: false,
      error: "El título es obligatorio"
    });
  }

  const task = await Task.create({ title });

  res.status(201).json({
    ok: true,
    data: task
  });
}

module.exports = {
  getTasks,
  createTask
};