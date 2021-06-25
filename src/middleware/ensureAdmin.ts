import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { CustomError, HTTP_ERRORS } from '../error'

import { UserRepository } from '../repository'

async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request

  const userRepository = getCustomRepository(UserRepository)
  const { admin } = await userRepository.findOne(user_id)

  if (admin) {
    return next()
  }

  throw new CustomError(HTTP_ERRORS.UNAUTHORIZED)
}

export { ensureAdmin }
