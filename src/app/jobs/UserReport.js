import Mail from "../lib/Mails"

export default {
  key: "UserReport",
  async handle({ data }) {
    const { user } = data
    console.log(user)
  }
}
