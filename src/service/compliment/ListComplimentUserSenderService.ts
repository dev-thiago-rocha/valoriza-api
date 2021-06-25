import { getCustomRepository } from 'typeorm'

import { ComplimentRepository } from '../../repository'

interface ListComplimentUserSenderRequest {
  user_sender_id: string
}

class ListComplimentUserSenderService {
  async execute({ user_sender_id }: ListComplimentUserSenderRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository)
    const compliments = await complimentRepository.find({
      user_sender_id,
    })

    return compliments
  }
}

export { ListComplimentUserSenderService }
