const HTTP_ERRORS = {
  BAD_REQUEST: {
    status: 400,
    message: 'Está faltando alguma coisa aí :/.',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Você não tem permissão para fazer isso.',
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Ocorreu um erro inesperado, tente novamente.',
  },
}

const VALIDATION_ERRORS = {
  INCORRECT_EMAIL: {
    status: 400,
    message: 'O email inserido é inválido.',
  },
  INVALID_AUTH_CREDENTIALS: {
    status: 400,
    message: 'O email/senha inserido é inválido.',
  },
  USER_ALREADY_EXISTS: {
    status: 400,
    message: 'O usuário já existe em nosso banco de dados.',
  },
  USER_RECEIVER_DOES_NOT_EXISTS: {
    status: 400,
    message: 'O usuário de destino não existe na nossa base de dados.',
  },
  USER_RECEIVER_EQUALS_USER_SENDER: {
    status: 400,
    message: 'É impossível criar um elogio para si mesmo.',
  },
  TAG_INVALID_NAME: {
    status: 400,
    message: 'O nome inserido é inválido.',
  },
  TAG_NAME_ALREADY_EXISTS: {
    status: 400,
    message: 'Já existe uma tag com esse nome.',
  },
}

class CustomError extends Error {
  public response: { status: number; message: string; detail: string }

  constructor(error: { status: number; message: string }, detail: string = undefined, ...args) {
    super(...args)
    this.response = {
      status: error.status,
      message: error.message,
      detail: detail,
    }
  }
}

export { VALIDATION_ERRORS, HTTP_ERRORS, CustomError }
