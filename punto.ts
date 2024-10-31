interface puntos{
  punto: number; 
}

let equipo1: puntos={
  punto: 0
};

let equipo2: puntos={
  punto: 0
  
};



const ResistenciaInputEquipo1 = document.getElementById ('Resistencia-TR') as HTMLInputElement;
const HandballInputEquipo1 = document.getElementById ('Handball-TR') as HTMLInputElement;
const AjedrezInputEquipo1 = document.getElementById ('Ajedrez-TR') as HTMLInputElement;


const ResistenciaInputEquipo2 = document.getElementById ('Resistencia-TN') as HTMLInputElement;
const HandballInputEquipo2 = document.getElementById ('Handball-TN') as HTMLInputElement;
const AjedrezInputEquipo2 = document.getElementById ('Ajedrez-TN') as HTMLInputElement;

const ResultadoOutput = document.getElementById('Resultado') as HTMLInputElement;

function AgregarPuntos (equipo: string){
if(equipo === 'equipo1') {
  equipo1.punto += parseInt(HandballInputEquipo1.value, 10) ||0;
  equipo1.punto += parseInt(ResistenciaInputEquipo1.value, 10) ||0;
  equipo1.punto += parseInt(AjedrezInputEquipo1.value, 10) ||0;
}

else if (equipo === 'equipo2'){
  equipo2.punto += parseInt(HandballInputEquipo2.value, 10) ||0;
  equipo2.punto += parseInt(ResistenciaInputEquipo2.value, 10) ||0;
  equipo2.punto += parseInt(AjedrezInputEquipo2.value, 10) ||0;
}
}

function MostrarResultados(){
  let Resultado = '';
  if (equipo1.punto > equipo2.punto){
    Resultado = 'Tribu Roja es el ganador con' + equipo1.punto + ' puntos';
  } else if   (equipo1.punto < equipo2.punto){
      Resultado = 'Tribu Negra es el ganador con' + equipo2.punto + ' puntos';
  } else{
      Resultado = 'Ambos equipos estan empatados con' + equipo1.punto + ' puntos';
  }
  ResultadoOutput.innerText= Resultado; 
}



  
 