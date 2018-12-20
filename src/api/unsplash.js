import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3fc10ecbbcfdceb2cb1137af51a54c0c5074a3cdd4f208a6df8847ba36784fb8 '
    }
});