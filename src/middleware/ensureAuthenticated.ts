import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { CustomError, HTTP_ERRORS } from '../error'

const ESPACO: string = ' '

interface Payload {
  sub: string
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if (!authToken) {
    throw new CustomError(HTTP_ERRORS.UNAUTHORIZED)
  }

  const [_, token] = authToken.split(ESPACO)

  try {
    const { sub } = verify(token, process.env.JWT_TOKEN_KEY) as Payload

    request.user_id = sub
    return next()
  } catch (error) {
    throw new CustomError(HTTP_ERRORS.UNAUTHORIZED)
  }
}

export { ensureAuthenticated }
