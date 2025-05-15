import { useState } from "react";
import { Container, Typography, Box, CssBaseline, Button } from "@mui/material";
import Quiz from "./components/Quiz";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f0f4f5",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden"
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"          // reduzido de h3 para h4 para título menor
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#00796b",
              textShadow: "0 1px 3px rgba(0,0,0,0.15)",
              mb: 3               // menos espaço abaixo
            }}
          >
            🎭 Quiz Cultural EMLTC
          </Typography>

          {!started ? (
            <>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{ mb: 4, fontWeight: 500 }}
              >
                Descubra qual curso cultural mais combina com você!
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => setStarted(true)}
                sx={{
                  px: 6,
                  py: 2,
                  backgroundColor: "#00796b",
                  "&:hover": {
                    backgroundColor: "#004d40",
                    boxShadow: "0 6px 15px rgba(0,121,107,0.6)"
                  },
                  fontWeight: "bold"
                }}
              >
                Começar
              </Button>
            </>
          ) : (
            <Quiz />
          )}
        </Container>
      </Box>
    </>
  );
}

export default App;
