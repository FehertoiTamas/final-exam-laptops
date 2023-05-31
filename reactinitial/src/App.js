import React, { useEffect, useState } from "react"
import { AppBar, Box, Button, TextField, Typography } from "@mui/material"
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([])
  const [sortAscending, setSortAscending] = useState(true);
  const [filter, setFilter] = useState("");


  const url = "https://demoapi.com/api/laptop"

  const getApiData = async () => {
    const response = await fetch(url).then((response) => response.json());
    setApiData(response)
    setIsLoading(false)

  }

  useEffect(() => {
    getApiData()
  }, [])


  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  const sortedData = [...apiData].sort((a, b) => {
    if (sortAscending) {
      return a.weight - b.weight;
    } else {
      return b.weight - a.weight;
    }
  });


  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = sortedData.filter((laptop) =>
    laptop.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Box
        sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Button style={{ width: 150 }} variant="contained" onClick={handleSort}>
            Sort
          </Button>
          <TextField
          style={{ width: 400 }}
            label="Filter by name"
            value={filter}
            onChange={handleFilter}
          />
        </AppBar>
      </Box>
      <Typography variant="h3">Laptops</Typography>
      {isLoading
        ? <LoadingMask />
        : filteredData.map((data, index) => (
          <Laptop key={index} data={data} />
        ))}
    </div>
  )
}

export default App
