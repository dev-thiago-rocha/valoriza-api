import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repository'
import { CustomError, VALIDATION_ERRORS } from '../../error'
import { hash } from 'bcryptjs'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {
    if (!email) {
      throw new CustomError(VALIDATION_ERRORS.INCORRECT_EMAIL)
    }

    const userRepository = getCustomRepository(UserRepository)
    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new CustomError(VALIDATION_ERRORS.USER_ALREADY_EXISTS)
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      admin: false,
      deleted: false,
    })
    await userRepository.save(user)

    return user
  }
}

export { CreateUserService }
