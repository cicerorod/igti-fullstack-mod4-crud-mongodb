import express from "express";
import { studentModels } from "../models/student.js";
const app = express();

app.get("/student", async (_, res) => {
  try {
    const student = await studentModels.find();
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.post("/student", async (req, res) => {
  try {
    const student = new studentModels(req.body);
    await student.save();
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    const student = await studentModels.findOneAndDelete({
      _id: req.params.id,
    });

    if (!student) {
      res.status(404).send("Documento não encontrado!");
    }
    res.status(200).send(`Student ${student} deletado com sucesso!`);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.patch("/student/:id", async (req, res) => {
  try {
    const student = await studentModels.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

export { app as studentRouter };
