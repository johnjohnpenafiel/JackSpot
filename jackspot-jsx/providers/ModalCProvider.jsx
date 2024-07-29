'use client'

import React from "react"
import { useState, useEffect } from "react"

import PostCollectionModal from "@/components/PostCollectionModal"


function ModalCProvider() {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

  return (
    <>
        <PostCollectionModal />
    </>
  )
}

export default ModalCProvider