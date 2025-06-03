"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function NotFound() {

    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                <h1 className="text-6xl flex w-full justify-center items-center">404 Page not found</h1>
                <Button asChild variant="outline" className="justify-center items-center mt-10">
                    <Link href="/">Return Home</Link></Button>
            </div>
        </>
    )
}