export type User = {
  name: string
  email: string
}

export const mockLogin = async (email: string, password: string): Promise<User> => {
  await new Promise((res) => setTimeout(res, 800))
  if (email === "seifbasel950@gmail.com" && password === "1234") {
    return { name: "Seif", email }
  }
  throw new Error("Wrong email or password")
}

export const mockSignup = async (name: string, email: string): Promise<User> => {
  await new Promise((res) => setTimeout(res, 800))
  return { name, email }
}