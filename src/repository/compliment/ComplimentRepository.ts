import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../../entity'

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {}

export { ComplimentRepository }
