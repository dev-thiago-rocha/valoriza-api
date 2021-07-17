import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repository'

interface UpdateNameUserRequest {
  user_id: string
  name: string
}

class UpdateNameUserService {
  async execute({ user_id, name }: UpdateNameUserRequest) {
    const userRepository = getCustomRepository(UserRepository)

    const updatedUser = await userRepository.save({ id: user_id, name })

    return updatedUser
  }
}

export { UpdateNameUserService }
