import { redirect } from 'next/navigation'

// Redirect to the hosted quiz on Senku
// Update the domain below to match your Senku deployment URL
const SENKU_QUIZ_URL = process.env.NEXT_PUBLIC_SENKU_URL
  ? `${process.env.NEXT_PUBLIC_SENKU_URL}/quiz/perfect-finish-painters`
  : 'http://localhost:3000/quiz/perfect-finish-painters'

export default function QuizPage() {
  redirect(SENKU_QUIZ_URL)
}
