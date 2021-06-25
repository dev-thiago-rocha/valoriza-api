import { Request, Response } from 'express'
import { CustomError, HTTP_ERRORS } from '../error'

function errorHandler(error: CustomError, request: Request, response: Response, next) {
  if (error == null || error.response == null) {
    error = new CustomError(HTTP_ERRORS.INTERNAL_SERVER_ERROR)
  }

  return response.status(error.response.status).send(error.response)
}

export { errorHandler }
