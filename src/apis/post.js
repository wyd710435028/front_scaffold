// 导入axios配置
import service from '../utils/request'

/**
 * 例子
 * @param fileId
 * @param nodeMap
 * @param allEntityLabelList
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getNodeByFileId(fileId,nodeMap,allEntityLabelList){
    return service.post('/medicalrecord/getNodeByFileId', {
        headers: { 'Content-Type': 'application/json' },
        fileId: fileId,
        nodeList: nodeMap,
        allEntityLabelList:allEntityLabelList
    })
}

