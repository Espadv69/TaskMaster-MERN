// Function to add a new task
export const addTask = async (taskData) => {
  const { title, description } = taskData

  if (!title || !description) {
    return false
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })

    if (!response.ok) throw new Error('Network response was not ok')

    const data = await response.json()

    return data
  } catch (err) {
    console.error('❌ Error adding task:', err.message)
    return false
  }
}
