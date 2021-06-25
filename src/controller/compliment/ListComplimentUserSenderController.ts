import { Request, Response } from 'express'
import { ListComplimentUserSenderService } from '../../service'

class ListComplimentUserSenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listComplimentUserSenderService = new ListComplimentUserSenderService()

    const compliment = await listComplimentUserSenderService.execute({
      user_sender_id: user_id,
    })

    return response.json(compliment)
  }
}

export { ListComplimentUserSenderController }
