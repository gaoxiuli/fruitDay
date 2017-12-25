import axios from 'axios'

export default {
	getData(url, obj, callback){
		axios(url, obj).then((res) => {
			callback(res.data)
		}).catch((err) => {
			console.log(err)
		})
	}
}
