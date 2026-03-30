import { getCurso } from '@/api/cursos'
import Link from 'next/link'

type Props = {
  params: {
    curso: string
  }
}

export default async function CursoPage({ params }: Props) {
  const curso = await getCurso(params.curso)

  if ('error' in curso) {
    return <main><p>{curso.error}</p></main>
  }

  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total de aulas: {curso.total_aulas}</p>
      <p>Total de horas: {curso.total_horas}</p>

      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.slug}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
