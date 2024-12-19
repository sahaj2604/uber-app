import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const [vehiclePanel,setVehiclePanel]=useState(false)
  const [confirmRidePanel,setConfirmRidePanel]=useState(false)
  const [vehicleFound,setVehicleFound]=useState(false)
  const [waitingForDriver,setWaitingForDriver]=useState(false)
  const panelRef=useRef(null)
  const panelCloseRef=useRef(null)
  const vehiclePanelRef=useRef(null)
  const confirmRidePanelRef=useRef(null)
  const vehicleFoundRef=useRef(null)
  const waitingForDriverRef=useRef(null)
  
  const submitHandler=(e) => {
    e.preventDefault()
  }

  useGSAP(function() {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        opacity:1,
        padding:20
      })
      gsap.to(panelCloseRef.current,{ 
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        opacity:0,
        padding:0
      })
      gsap.to(panelCloseRef.current,{ 
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function() {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(0)"
      })
    } else {
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
},[vehiclePanel])

  useGSAP(function() {
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:"translateY(0)"
      })
    } else {
      gsap.to(confirmRidePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
},[confirmRidePanel])

  useGSAP(function() {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:"translateY(0)"
      })
    } else {
      gsap.to(vehicleFoundRef.current,{
        transform:"translateY(100%)"
      })
    }
},[vehicleFound])

  useGSAP(function() {
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:"translateY(0)"
      })
    } else {
      gsap.to(waitingForDriverRef.current,{
        transform:"translateY(100%)"
      })
    }
},[waitingForDriver])
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen" >
        <img
          className="h-full w-full object-cover"
          src="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2015/11/blog-hero.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="bg-white h-[30%] p-6">
          <h5 className="absolute opacity-0 right-6 top-6 text-xl" onClick={()=>setPanelOpen(false)} ref={panelCloseRef} >
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form action="" className="relative" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute bg-gray-800 h-16 w-1 rounded top-[30%] left-6">
            </div>
            <input
            onClick={()=>setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}
            />
            <input
            onClick={()=>setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div className=" bg-white h-0" ref={panelRef}>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed z-10 bg-white bottom-0 px-3 py-10 translate-y-full w-full pt-12">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className="fixed z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full w-full">
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bg-white bottom-0 px-3 py-6 pt-12 translate-y-full w-full">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bg-white bottom-0 px-3 py-6 pt-12 w-full">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
