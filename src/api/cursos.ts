import { Aula, Curso } from '@/types/Curso.type'

const apiUrl = 'https://api.origamid.online/cursos'

const getCursos = async () => {
  const response = await fetch(apiUrl)
  return (await response.json()) as Curso[]
}

const getCurso = async (curso: string) => {
  const response = await fetch(`${apiUrl}/${curso}`)
  return (await response.json()) as Curso
}

const getAula = async (curso: string, aula: string) => {
  const response = await fetch(`${apiUrl}/${curso}/${aula}`)
  return (await response.json()) as Aula
}

export { getAula, getCurso, getCursos }
