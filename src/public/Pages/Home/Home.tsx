import { CardPresentation } from "../../../components"




export const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-10">Welcome to My Portfolio</h1>
      <p className="mt-4 text-gray-400">Explore my projects and skills below.</p>
      <CardPresentation />
    </>
  )
}