import React from "react"
import { Link } from "gatsby"

export default function About() {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>About me</h1>
            <p>
                I'm good enough, I'm smart enough, and gosh darn it, people like me!
            </p>
        </div>
    )
}