import { WorkoutsContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const UseWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if(!context) {
    throw Error('UseWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}