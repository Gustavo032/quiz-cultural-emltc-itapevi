import { useState } from "react";
import questions from "../data/questions.json";
import { Question as QuestionType } from "../types";
import Result from "./Result";
import Question from "./Question";

import {
  Box,
  Typography,
  LinearProgress,
  Container,
  Paper,
  Fade
} from "@mui/material";

const options = [
  { label: "Sim, com certeza", value: 2 },
  { label: "Sim", value: 1 },
  { label: "Talvez", value: 0 },
  { label: "Não", value: -1 },
  { label: "Não, de jeito nenhum", value: -2 }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState("");

  const handleAnswer = (multiplier: number) => {
    const question = questions[currentQuestion] as unknown as QuestionType;
    const newScores = { ...scores };

    for (const category in question.weights) {
      const weight = question.weights[category];
      newScores[category] = (newScores[category] || 0) + weight * multiplier;
    }

    setScores(newScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      const topCategory = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      setResult(topCategory);
    }
  };

  if (isFinished) {
    return (
      <Result
        course={result}
        onRestart={() => {
          setCurrentQuestion(0);
          setScores({});
          setIsFinished(false);
          setResult("");
        }}
      />
    );
  }

  const question = questions[currentQuestion];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container maxWidth="sm">
      <Fade in>
        <Paper
          elevation={6}
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(to right, #f8fafc, #e0f7fa)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600, textTransform: "uppercase", color: "#00796b" }}
          >
            Pergunta {currentQuestion + 1} de {questions.length}
          </Typography>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ mb: 4, height: 10, borderRadius: 5, backgroundColor: "#cfd8dc" }}
          />

          <Question
            questionText={question.text}
            options={options}
            onSelect={handleAnswer}
          />
        </Paper>
      </Fade>
    </Container>
  );
}
