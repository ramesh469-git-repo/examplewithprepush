export default class publicApiService {
    static getDashboardDetails = async()=>{
        const response =await fetch('http://universities.hipolabs.com/search?country=United+Kingdom');
        const resData = await response.json();
        return resData;
    }
}