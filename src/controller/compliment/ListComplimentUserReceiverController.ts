import { Request, Response } from 'express'
import { ListComplimentUserReceiverService } from '../../service'

class ListComplimentUserReceiverController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listComplimentUserReceiverService = new ListComplimentUserReceiverService()

    const compliment = await listComplimentUserReceiverService.execute({
      user_receiver_id: user_id,
    })

    return response.json(compliment)
  }
}

export { ListComplimentUserReceiverController }
