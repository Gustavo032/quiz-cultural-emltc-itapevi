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
          position: "relative",
          minHeight: "100vh",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* 🔽 Background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -2,
            backgroundImage: 'url(./images/backgrounds/repetible3.png)',
            backgroundSize: "33.3333%",
            backgroundPosition: "center",
            backgroundRepeat: "repeat"
          }}
        />

        {/* 🔽 Overlay escuro */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            backgroundColor: "rgba(0, 0, 0, 0.4)" // ajuste aqui a opacidade
          }}
        />

        {/* 🔽 Conteúdo principal */}
        <Container maxWidth="sm" sx={{ textAlign: "center", color: "#fff" }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
              mb: 3
            }}
          >
            🎭 Quiz Cultural EMLTC
          </Typography>

          {!started ? (
            <>
              <Typography
                variant="subtitle1"
                sx={{ mb: 4, fontWeight: 500, color: "#e0f2f1" }}
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
