import { Request, Response } from 'express'
import { CreateUserService } from '../../service'

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body
    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ email, password })

    return response.json({ id: user.id })
  }
}

export { CreateUserController }
