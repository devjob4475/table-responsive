import { Box } from '@mui/material'
import React from 'react'
import './css/styles.css'
import { data } from 'data'
function Index() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <table id="customers">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.company}</td>
              <td>{row.contact}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

export default Index