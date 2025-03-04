// Import the necessary modules or ensure fetch is available
// In a Xeos environment, fetch should be globally available

// Replace with your actual API key and external user ID
const apiKey = 'peJ3Tnn3e98Hy51qn1kdYQeO4OiBZ1sG';
const externalUserId = ''; // Leave blank as per project requirement

// Function to create a chat session
async function createChatSession() {
  const url = 'https://api.on-demand.io/chat/v1/sessions';
  const headers = {
    'Content-Type': 'application/json',
    'apikey': apiKey
  };
  const body = JSON.stringify({
    pluginIds: [],
    externalUserId: externalUserId
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data.id; // Extract session ID
}

// Function to submit a query
async function submitQuery(sessionId) {
  const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;
  const headers = {
    'Content-Type': 'application/json',
    'apikey': apiKey
  };
  const body = JSON.stringify({
    endpointId: 'predefined-openai-gpt4o',
    query: 'Put your query here',
    pluginIds: ['plugin-1726236428', 'plugin-1726227923'],
    responseMode: 'sync'
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// Main function to execute the API calls
async function main() {
  try {
    const sessionId = await createChatSession();
    const queryResponse = await submitQuery(sessionId);
    console.log(queryResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the main function
main();



