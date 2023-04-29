import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { handleCompletion } from '@/utils/llm'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      const instruction = req.body

      handleCompletion(instruction, res)

      break

    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} not allowed.`)
  }
}
