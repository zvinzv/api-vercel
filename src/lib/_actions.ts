'use server'
const baseURL = process.env.NEXT_PUBLIC_APP_URL
export const login = async () => {
  try {
    const res = await fetch(`${baseURL}/api/login`)
    const data = await res.json()
    return data
  } catch (error) {
    return { error }
  }
}
