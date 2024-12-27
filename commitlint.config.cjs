const config = {
  extends: ['@commitlint/config-conventional'], // Extiende el estándar convencional
  rules: {
    'references-empty': [2, 'never'], // Asegura que haya referencias en los mensajes
    'footer-max-line-length': [2, 'always', 100], // Limita el footer a 100 caracteres
    'body-max-line-length': [2, 'always', 100], // Limita el cuerpo del mensaje a 100 caracteres
    'header-max-length': [2, 'always', 72], // Limita el encabezado a 72 caracteres
    'type-enum': [
      2,
      'always',
      [
        'config', // Cambios relacionados con la configuración del proyecto
        'build', // Cambios relacionados con la construcción del proyecto
        'chore', // Mantenimiento y tareas menores
        'ci', // Integración continua y configuraciones relacionadas
        'docs', // Cambios en documentación
        'feat', // Nueva funcionalidad
        'fix', // Corrección de errores
        'perf', // Mejora de rendimiento
        'refactor', // Cambios de código que no agregan ni corrigen funcionalidades
        'revert', // Revertir cambios
        'style', // Cambios de formato (espacios, comas, etc.)
        'test', // Añadir o modificar pruebas
      ],
    ],
  },
};

module.exports = config;
