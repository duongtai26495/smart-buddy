import axios from 'axios';

const API_KEY = process.env.CHAT_API_KEY
const chatEndpoint = 'https://api.openai.com/v1/chat/completions';

// Function to send a message to ChatGPT
const sendMessage = async (message) => {
  try {
    const response = await axios.post(chatEndpoint, {
      model: 'gpt-3.5-turbo', // The specific model you want to use
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    // Handle the response from ChatGPT
    const reply = response.data.choices[0].message.content
    return reply;
  } catch (error) {
    console.error('Error sending message to ChatGPT:', error);
    return 'Error: Unable to process the message';
  }
};

export default sendMessage;