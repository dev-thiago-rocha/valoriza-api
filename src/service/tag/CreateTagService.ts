import { getCustomRepository } from 'typeorm'
import { TagRepository } from '../../repository'
import { CustomError, VALIDATION_ERRORS } from '../../error'

interface CreateTagRequest {
  name: string
}

class CreateTagService {
  async execute({ name }: CreateTagRequest) {
    if (!name) {
      throw new CustomError(VALIDATION_ERRORS.TAG_INVALID_NAME)
    }

    const tagRepository = getCustomRepository(TagRepository)

    const nameAlreadyExists = await tagRepository.findOne({ name })

    if (nameAlreadyExists) {
      throw new CustomError(VALIDATION_ERRORS.TAG_NAME_ALREADY_EXISTS)
    }

    const tag = tagRepository.create({ name })
    await tagRepository.save(tag)

    return tag
  }
}

export { CreateTagService }
