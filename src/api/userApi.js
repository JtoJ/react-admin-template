import reqTool from '../http/request';

export default function login(data) {
    return reqTool.post('/login',data);
}