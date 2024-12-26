import React from 'react'
import Header from './components/Header'
import EmergencyCard from '../../components/bus-route/EmergencyCard'
import BusDetailsPage from './BusDetailsPage'
import BusCard from './BusCard/BusCard'

function IDCardDetails() {
  return (
    <div>
      <Header />
      {/* <EmergencyCard /> */}
      <BusDetailsPage />
      <BusCard />

    </div>
  )
}

export default IDCardDetails
