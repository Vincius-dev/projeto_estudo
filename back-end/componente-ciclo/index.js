const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/processar-dados', (req, res) => {
  // Recebe os dados enviados pelo usuário
  let materias = req.body.materias;
  let dificuldades = req.body.dificuldades;
  let horasPorDia = req.body.horasPorDia;
  let diasPorSemana = req.body.diasPorSemana;

  //Processamento dos dados

  let dificuldadesInteiro = dificuldades.map(dificuldade => parseInt(dificuldade))
  
  let somaDificuldades = 0;

  dificuldadesInteiro.forEach(dificuldade => {
  somaDificuldades += dificuldade;
  })

  let horasTotaisSemanais = horasPorDia * diasPorSemana;

  let tempoMedioUnidadeEstudo = horasTotaisSemanais / somaDificuldades ;

  dificuldadesInteiro = dificuldadesInteiro.map(function(numero) {
    return numero * tempoMedioUnidadeEstudo;
  });

  materias = materias.map(function(materia, indice) {
    return [materia, dificuldadesInteiro[indice]];
  })
  
  console.log(materias)

  res.send(materias);
});



app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});