import VersionRepository from '../repositories/version.repository'
import { RequestResponse } from '../utils/common'
const versionRepository = new VersionRepository

class VersionController {
  constructor() {}

  release = async (req, res, next) => {
    let data = req.body
    let userId= req.userId
    try {
      const version = await versionRepository.create(data)
      if(!version) throw new Error("Can't create project type")
      return res.json(new RequestResponse({
        statusCode: 200,
        data: version
      }))
    } catch (error) {
      return res.json(new RequestResponse({
        success: false,
        statusCode: 400,
        error
      }))
    }
  }

  getListByProject = async (req, res, next) => {
    let userId= req.userId
    try {
      const params = req.query
      const queryParams = JSON.parse(params.query)
      const versions = await versionRepository.getListVersionByParams(queryParams)
      if(!versions) throw new Error("Can't get list version")
      return res.json(new RequestResponse({
        statusCode: 200,
        data: versions
      }))
    } catch(error) {
      return res.json(new RequestResponse({
        success: false,
        statusCode: 400,
        error
      }))
    }
  }

  getListAll = async (req, res, next) => {
    let userId= req.userId
    try {
      const versions = await versionRepository.getListAll()
      if(!versions) throw new Error("Can't get list project type")
      return res.json(new RequestResponse({
        statusCode: 200,
        data: versions
      }))
    } catch(error) {
      return res.json(new RequestResponse({
        success: false,
        statusCode: 400,
        error
      }))
    }
  }

  update = async (req, res, next) => {
        let data = req.body
        let userId = req.userId
        let id = req.params.id
        try {
            let version = await versionRepository.update(id, data)
            if(!version) throw new Error("Can't update project type")

            return res.json(new RequestResponse({
                statusCode: 200,
                data: version
            }))
        } catch (error) {
            return res.json(new RequestResponse({
                statusCode: 400,
                success: false,
                error
            }))
        }
    }

    remove = async (req, res, next) => {
        let id = req.params.id
        let userId = req.userId
        try {
            let version = await versionRepository.remove(id)
            if(!version) throw new Error("Can't remove project type")

            return res.json(new RequestResponse({
                statusCode: 200
            }))
        } catch (error) {
            return res.json(new RequestResponse({
                statusCode: 400,
                success: false,
                error
            }))
        }
    }
}

export default VersionController