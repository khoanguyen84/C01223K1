import axios from "axios";
class StudentService {
    static create(data) {
        return axios.post('https://js-post-api.herokuapp.com/api/students', data)
    }
}

export default StudentService;