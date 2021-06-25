import { getCustomRepository } from 'typeorm'
import { TagRepository } from '../../repository'

class ListTagService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository)
    const tags = tagRepository.find()

    return tags
  }
}

export { ListTagService }
