import { getCustomRepository } from 'typeorm'
import { ComplimentRepository, UserRepository } from '../../repository'
import { CustomError, VALIDATION_ERRORS } from '../../error'

interface CreateComplimentRequest {
  tag_id: string
  user_sender_id: string
  user_receiver_id: string
  message: string
}

class CreateComplimentService {
  async execute({ tag_id, user_sender_id, user_receiver_id, message }: CreateComplimentRequest) {
    if (user_sender_id === user_receiver_id) {
      throw new CustomError(VALIDATION_ERRORS.USER_RECEIVER_EQUALS_USER_SENDER)
    }

    const complimentsRepository = getCustomRepository(ComplimentRepository)
    const userRepository = getCustomRepository(UserRepository)

    const userReceiverExists = await userRepository.findOne(user_receiver_id)

    if (!userReceiverExists) {
      throw new CustomError(VALIDATION_ERRORS.USER_RECEIVER_DOES_NOT_EXISTS)
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver_id,
      user_sender_id,
      message,
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }
