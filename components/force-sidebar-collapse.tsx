"use client"

import * as React from "react"
import { useSidebar } from "@/components/ui/sidebar"

export function ForceSidebarCollapse() {
    const { setOpen } = useSidebar()

    React.useEffect(() => {
        setOpen(false)
    }, [setOpen])

    return null
}
