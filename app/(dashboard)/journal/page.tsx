import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const journalPage = async () => {
  const entries = await getEntries()
  return (
    <div>
      <h1>Journal</h1>
    </div>
  )
}

export default journalPage
