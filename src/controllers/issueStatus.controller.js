import IssueStatusRepository from '../repositories/issueStatus.repository'
import {RequestResponse} from '../utils/common'

const issueStatusRepository = new IssueStatusRepository()

class IssueStatusController {
    create = async (req, res, next) => {
        let data = req.body
        let userId = req.userId
        try {
            //handler data
            let issueStatus = await issueStatusRepository.create(data)
            if (!issueStatus) throw new Error("Can't create status of issue")
            return res.json(new RequestResponse({
                statusCode: 200,
                data: issueStatus
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
            let issueStatuss = await issueStatusRepository.getListAll()
            if(!issueStatuss) throw new Error("Can't get list issue statuses")
            return res.json( new RequestResponse({
                data: issueStatuss,
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

export default IssueStatusController