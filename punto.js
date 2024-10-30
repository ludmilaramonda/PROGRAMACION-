var equipo1 = {
    punto: 0
};
var equipo2 = {
    punto: 0
};
var ResistenciaInputEquipo1 = document.getElementById('Resistencia-TR');
var HandballInputEquipo1 = document.getElementById('Handball-TR');
var AjedrezInputEquipo1 = document.getElementById('Ajedrez-TR');
var ResistenciaInputEquipo2 = document.getElementById('Resistencia-TN');
var HandballInputEquipo2 = document.getElementById('Handball-TN');
var AjedrezInputEquipo2 = document.getElementById('Ajedrez-TN');
var ResultadoOutput = document.getElementById('Resultado');
function AgregarPuntos(equipo) {
    if (equipo === 'equipo1') {
        equipo1.punto += parseInt(HandballInputEquipo1.value, 10) || 0;
        equipo1.punto += parseInt(ResistenciaInputEquipo1.value, 10) || 0;
        equipo1.punto += parseInt(AjedrezInputEquipo1.value, 10) || 0;
    }
    else if (equipo === 'equipo2') {
        equipo2.punto += parseInt(HandballInputEquipo2.value, 10) || 0;
        equipo2.punto += parseInt(ResistenciaInputEquipo2.value, 10) || 0;
        equipo2.punto += parseInt(AjedrezInputEquipo2.value, 10) || 0;
    }
}
function MostrarResultado() {
    var Resultado = '';
    if (equipo1.punto > equipo2.punto) {
        Resultado = 'Equipo 1 es el ganador con' + equipo1.punto + 'puntos';
    }
    else if (equipo1.punto < equipo2.punto) {
        Resultado = 'Equipo 2 es el ganador' + equipo2.punto + 'puntos';
    }
    else {
        Resultado = 'Ambos equipos estan ematados con' + equipo1.punto + 'puntos';
    }
    ResultadoOutput.innerText = Resultado;
}
