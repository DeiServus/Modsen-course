const axios = require('axios');

async function fetchDataFromServer(accessToken) {
    try {
        const response = await axios.get('http://localhost:5000/api/meetup', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
    }
}
 
(async function main() {
    console.log(await fetchDataFromServer("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImxvZ2luMSIsInJvbGUiOnRydWUsImlhdCI6MTcxMjY4MjY5MywiZXhwIjoxNzEyNjg0NDkzfQ.pcGZ-Se0xmxekX5WDB9Qusb7W-Fj5XG6KQIoI0xA5S0"))
})()