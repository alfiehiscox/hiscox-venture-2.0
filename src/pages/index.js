import * as React from "react"
import Navbar from "../components/nav";
import IndexInfo from "../components/index-info";

// markup
const IndexPage = () => {
  return (
    <main className="bg-gray-900 h-full">
      <Navbar/>
      
      <div className=" p-28 pb-24 text-white font-quicksand text-center">
        <h1 className="text-8xl font-medium">hiscox ventures.</h1>
        <p className="text-l py-5">A place where change is the next things we do...</p>
      </div>

      <IndexInfo />
    </main>
  )
}

export default IndexPage
