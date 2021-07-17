import { Request, Response } from 'express'
import { UpdateNameUserService } from '../../service'

class UpdateNameUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const { name } = request.body

    const updateNameUserService = new UpdateNameUserService()

    const updatedUser = await updateNameUserService.execute({ user_id, name })

    return response.json(updatedUser)
  }
}

export { UpdateNameUserController }
