// 导入axios配置
import service from '../utils/request'

/**
 * 例子
 * @param hospitalName
 * @param admissionId
 * @param pageSize
 * @param currentPage
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getRecordList(hospitalName,admissionId,pageSize,currentPage) {
    return service.get('/medicalrecord/getMedicalRecordList', {
        headers: { 'Content-Type': 'application/json' },
        params: {
            hospitalId: hospitalName,
            admissionId: admissionId,
            pageSize: pageSize,
            pageNum: currentPage
        }
    })
}



