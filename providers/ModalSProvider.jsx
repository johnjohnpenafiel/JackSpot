'use client'

import React from "react"
import { useState, useEffect } from "react"

import PostSpotModal from "@/components/PostSModal"


function ModalSProvider({onSpotAdded}) {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

  return (
    <>
        <PostSpotModal onSpotAdded={onSpotAdded} />
    </>
  )
}

export default ModalSProvider