import { Typography, Button, Paper, Box } from "@mui/material";

interface ResultProps {
  course: string;
  onRestart: () => void;
}

const courseDescriptions: Record<string, string> = {
  teatro: `🎭 Teatro é para quem ama interpretar, se expressar e viver personagens. O curso da EMLTC oferece formação em História do Teatro, Sensibilização Artística e apresentações cênicas que fortalecem sua presença e expressão.`,
  circo: `🎪 Circo-Teatro é ideal para quem ama desafios físicos, acrobacias, malabares e a arte do riso. A EMLTC oferece aulas que desenvolvem criatividade corporal e habilidade artística com humor, coragem e expressão.`,
  dança: `💃 Dança é para quem sente a música no corpo. Ballet, Jazz, Contemporâneo, Hip Hop ou Zumba — a Escola Livre de Dança de Itapevi oferece técnicas para todas as idades com professores experientes e estrutura completa.`,
  música: `🎶 Música é sua vibe! Na Escola Livre de Música você pode aprender diversos instrumentos, percussão, teoria musical e se integrar a bandas de nível profissional como a Banda Sinfônica de Itapevi.`,
  artes_visuais: `🎨 Você se conecta com imagens, formas e criação manual. A Escola Livre de Artes oferece cursos de desenho, artesanato e ilustração digital — uma verdadeira oficina de criatividade para todas as idades.`
};

export default function Result({ course, onRestart }: ResultProps) {
  const description = courseDescriptions[course] || "Curso não encontrado.";

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 10 }}>
      <Paper
        elevation={8}
        sx={{
          p: 5,
          borderRadius: 4,
          background: "linear-gradient(to right, #e0f7fa, #f8fafc)",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#00796b">
          Resultado:
        </Typography>

        <Typography
          variant="h5"
          mb={4}
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
        >
          Seu curso ideal é: <strong>{course.replace("_", " ")}</strong>
        </Typography>

        <Typography variant="body1" mb={5} fontSize="1.2rem" color="#004d40">
          {description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#00796b",
            "&:hover": {
              backgroundColor: "#004d40",
              boxShadow: "0 6px 15px rgba(0,121,107,0.6)"
            },
            fontWeight: "bold",
            px: 5,
            py: 1.5
          }}
          onClick={onRestart}
        >
          Refazer Quiz
        </Button>
      </Paper>
    </Box>
  );
}
