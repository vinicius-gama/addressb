import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import Button from "./Button"

function App() {
	const [addData, setAddData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios("https://randomuser.me/api?results=25")
				setAddData(response.data.results)
			} catch (error) {
				console.error("Error fetching beer data:", error)
			}
		}

		fetchData()
	}, [])

  
  const [showDetails, setShowDetails] = useState(false)

  const handleToggleDetails = (index) => {
    setShowDetails(!showDetails)
  }

	return (
    <div>
    {addData.map((item, index) => (
      <div key={index}>
        <Button
          image={item.picture.thumbnail}
          name={`${item.name.first} ${item.name.last}`}
          onClick={handleToggleDetails} 
        />
        {showDetails && ( // only show details if showDetails state is true
          <div>
            <p>{`Email: ${item.email}`}</p>
            <p>{`Phone: ${item.phone}`}</p>
            <button onClick={handleToggleDetails}>Hide details</button>
          </div>
        )}
      </div>
    ))}
  </div>
)
}

export default App
