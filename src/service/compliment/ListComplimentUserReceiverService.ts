import { getCustomRepository } from 'typeorm'

import { ComplimentRepository } from '../../repository'

interface ListComplimentUserReceiverRequest {
  user_receiver_id: string
}

class ListComplimentUserReceiverService {
  async execute({ user_receiver_id }: ListComplimentUserReceiverRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository)
    const compliments = await complimentRepository.find({
      user_receiver_id,
    })

    return compliments
  }
}

export { ListComplimentUserReceiverService }
