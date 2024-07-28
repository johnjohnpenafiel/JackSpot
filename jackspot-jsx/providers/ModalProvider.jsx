'use client'

import React from "react"
import { useState, useEffect } from "react"

import PostModal from "@/components/PostModal"


function ModalProvider() {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

  return (
    <>
        <PostModal />
    </>
  )
}

export default ModalProvider