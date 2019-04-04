import PriorityRepository from '../repositories/priority.repository'
import UserRepository from '../repositories/user.repository'

import {RequestResponse} from '../utils/common'

const priorityRepository = new PriorityRepository()
const userRepository = new UserRepository()

class PriorityController {
    create = async (req, res, next) => {
        let data = req.body
        let userId = req.userId
        try {
            //handler data
            if(!data.name || !data.level) throw new Error('Missing name or level property')

            let isLevelExist = await priorityRepository.getPriority({level: data.level})
            let isNameExist = await priorityRepository.getPriority({name: data.name})
            if(isLevelExist || isNameExist) throw new Error('Level or name property is exist.')

            let priority = await priorityRepository.create(data)
            if (!priority) throw new Error("Can't create priority")

            return res.json(new RequestResponse({
                statusCode: 200,
                data: priority
            }))
          } catch (error) {
            return res.json( new RequestResponse({
                success: false,
                statusCode: 400,
                error
            }))
          }
    }

    getListAll = async (req, res, next) => {
        try {
            let priorities = await priorityRepository.getListAll()
            if(!priorities) throw new Error("Can't get list priorities")
            return res.json( new RequestResponse({
                data: priorities,
                statusCode: 200
            }))
        } catch (error) {
            return res.json( new RequestResponse({
                success: false,
                statusCode: 400,
                error
            }))
        }
    }
}

export default PriorityController