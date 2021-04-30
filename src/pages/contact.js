import React from "react"
import { Link } from "gatsby"

export default function Contact() {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>I'd love to talk! Email me at the address below</h1>
            <p>
                <a href="mailto:me@example.com">me@example.com</a>
            </p>
        </div>
    )
}