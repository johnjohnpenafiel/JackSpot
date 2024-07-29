'use client'

import React from "react"
import { useState, useEffect } from "react"

import PostSpotModal from "@/components/PostSpotModal"


function ModalSProvider() {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

  return (
    <>
        <PostSpotModal />
    </>
  )
}

export default ModalSProvider