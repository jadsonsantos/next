import { getCursos } from '@/api/cursos'
import Link from 'next/link'

export default async function CursosPage() {
  const data = await getCursos()

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {data.map((curso) => (
          <li key={curso.slug}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
