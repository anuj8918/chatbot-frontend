import axios from 'axios'

export async function sendChatMessage(message) {
    const text = message?.toString().trim()
    if (!text) {
        throw new Error('Message cannot be empty')
    }

    try {
        const response = await axios.post('http://localhost:5000/chat', { message: text })
        const data = response.data
        if (!data?.reply) {
            throw new Error('No reply returned from backend')
        }
        return data.reply
    } catch (error) {
        const apiError = error?.response?.data?.error
        throw new Error(apiError || error.message || 'Chat request failed')
    }
}

export default sendChatMessage
