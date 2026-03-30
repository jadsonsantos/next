import { Aula, Curso } from '@/types/Curso.type'

const apiUrl = 'https://api.origamid.online/cursos'

const getCursos = async () => {
  const response = await fetch(apiUrl)
  if (!response.ok) {
    throw new Error('Erro ao buscar cursos')
  }
  return (await response.json()) as Curso[]
}

const getCurso = async (curso: string) => {
  const response = await fetch(`${apiUrl}/${curso}`)
  if (!response.ok) {
    return { error: 'Curso não encontrado' }
  }
  return (await response.json()) as Curso & {
    aulas: Aula[]
  }
}

const getAula = async (curso: string, aula: string) => {
  const response = await fetch(`${apiUrl}/${curso}/${aula}`)
  if (!response.ok) {
    throw new Error('Erro ao buscar aula')
  }
  return (await response.json()) as Aula
}

export { getAula, getCurso, getCursos }
