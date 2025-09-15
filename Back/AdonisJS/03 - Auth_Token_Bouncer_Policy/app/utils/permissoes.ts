export const permissions = [
  {
    listCurso: false,
    viewCurso: false,
    createCurso: false,
    editCurso: false,
    deleteCurso: false,
  },
  // COORDENADOR - 1
  {
    listCurso: true,
    viewCurso: true,
    createCurso: true,
    editCurso: true,
    deleteCurso: true,
  },
  // PROFESSOR - 2
  {
    listCurso: true,
    viewCurso: true,
    createCurso: true,
    editCurso: false,
    deleteCurso: false,
  },
]
