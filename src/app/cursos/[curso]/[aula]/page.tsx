import { getAula } from '@/api/cursos'
import Link from 'next/link'

export default async function AulaPage({
  params
}: {
  params: { aula: string; curso: string }
}) {
  const aula = await getAula(params.curso, params.aula)

  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>Voltar para o curso</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Total de horas: {aula.tempo}</p>
      <p>Ordem: {aula.ordem}</p>
    </main>
  )
}
