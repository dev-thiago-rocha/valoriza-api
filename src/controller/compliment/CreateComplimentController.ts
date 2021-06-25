import { Request, Response } from 'express'
import { CreateComplimentService } from '../../service'

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_receiver_id, message, tag_id } = request.body
    const { user_id } = request
    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      user_sender_id: user_id,
      user_receiver_id,
      message,
      tag_id,
    })

    return response.json({ id: compliment.id })
  }
}

export { CreateComplimentController }
