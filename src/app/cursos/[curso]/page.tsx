import { getCurso } from '@/api/cursos'
import Link from 'next/link'

type Props = {
  params: {
    curso: string
  }
}

export default async function CursoPage({ params }: Props) {
  const data = await getCurso(params.curso)

  if (data.error === 'Curso não encontrado') {
    return <p>Curso não encontrado</p>
  }

  return (
    <main>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Total de aulas: {data.total_aulas}</p>
      <p>Total de horas: {data.total_horas}</p>

      <h2>Aulas</h2>
      <ul>
        {data.aulas.map((aula) => (
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
