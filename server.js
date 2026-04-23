import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/gerar", (req, res) => {
  const { objeto, tipo, prazo } = req.body;

  const texto = `A JUSTIFICATIVA DO PRESENTE TERMO ADITIVO FUNDAMENTA-SE NA NECESSIDADE DE ${tipo.toUpperCase()}, VISANDO GARANTIR A CONTINUIDADE DOS SERVIÇOS DE ${objeto.toUpperCase()}, PELO PERÍODO DE ${prazo.toUpperCase()}, EM CONFORMIDADE COM A LEI Nº 14.133/21.`;

  res.json({ texto });
});

app.listen(3000, () => console.log("Servidor rodando"));
