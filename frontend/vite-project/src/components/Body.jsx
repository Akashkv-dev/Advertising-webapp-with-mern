
const Body = () => {
  return (
    <div className="relative">
        <img className="w-full h-screen " src="https://housing.com/news/wp-content/uploads/2023/09/advertising-companies.jpg" alt=""/>
        <div className="absolute top-0 left-0 w-full h-screen flex justify-center bg-black opacity-60">
            <div className="text-center pt-40" >
            <div className="mb-8">
            <span className="border border-white px-2 py-0 text-6xl text-white font-bold">No.1 ADVERTISING <br/>
            COMPANY</span>
          </div>
                <span className="text-3xl text-white mx-8">WE MAKE DIGITAL ADVERTISING WORK <br/> FOR YOU</span>
            </div>

        </div>
    </div>
  )
}

export default Body