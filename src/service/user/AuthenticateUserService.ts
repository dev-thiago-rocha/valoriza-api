import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UserRepository } from '../../repository'
import { CustomError, VALIDATION_ERRORS } from '../../error'

interface AuthenticateUserRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: AuthenticateUserRequest) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({ email })

    if (!user) {
      throw new CustomError(VALIDATION_ERRORS.INVALID_AUTH_CREDENTIALS)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new CustomError(VALIDATION_ERRORS.INVALID_AUTH_CREDENTIALS)
    }

    const token = sign({ email: user.email }, process.env.JWT_TOKEN_KEY, {
      subject: user.id,
      expiresIn: '1d',
    })

    return token
  }
}

export { AuthenticateUserService }
