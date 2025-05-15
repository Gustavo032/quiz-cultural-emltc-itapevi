import React from "react";
import { Typography, Button, Stack } from "@mui/material";

interface Option {
  label: string;
  value: number;
}

interface QuestionProps {
  questionText: string;
  options: Option[];
  onSelect: (value: number) => void;
}

export default function Question({ questionText, options, onSelect }: QuestionProps) {
  return (
    <div>
      <Typography
        variant="h5"
        component="p"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: "#004d40", // tom mais escuro de verde para contraste
          userSelect: "none",
        }}
      >
        {questionText}
      </Typography>

      <Stack spacing={2}>
        {options.map((option, idx) => (
			<Button
				key={idx}
				variant="outlined"
				fullWidth
				size="large"
				disableRipple
				onClick={(e) => {
					// Remove foco visual
					(e.currentTarget as HTMLElement).blur();
					onSelect(option.value);
				}}
				sx={{
					justifyContent: "flex-start",
					textTransform: "none",
					fontWeight: 500,
					fontSize: "1.1rem",
					color: "#00695c",
					borderColor: "#b2dfdb",
					transition: "all 0.3s ease",
					"&:hover": {
					backgroundColor: "#00796b",
					color: "#e0f2f1",
					borderColor: "#004d40",
					boxShadow: "0 4px 15px rgba(0,121,107,0.4)",
					},
					"&:focus": {
					outline: "none",
					boxShadow: "none",
					}
				}}
			>
				{option.label}
			</Button>
        ))}
      </Stack>
    </div>
  );
}
