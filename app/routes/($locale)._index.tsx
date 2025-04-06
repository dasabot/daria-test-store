import { Link } from '@remix-run/react'

const Homepage = () => (
  <div className="home">
    <Link
      className="inline-block bg-white border border-gray-200 shadow-inner text-gray-800 px-[20px] py-[10px] rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
      to="/collections/sale"
    >
      Go to the Sale collection
    </Link>
  </div>
)

export default Homepage
