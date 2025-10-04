import React, { useState, useEffect } from "react";

const Greeting = ({ userTimeInHour }: { userTimeInHour: number }) => {

    const [greeting, setGreeting] = useState<string>("");

    useEffect(() => {
        if (userTimeInHour >= 0 && userTimeInHour < 12) {
            setGreeting("Good morning!");
        } else if (userTimeInHour >= 12 && userTimeInHour < 18) {
            setGreeting("Good Afternoon!");
        } else if (userTimeInHour >= 18 && userTimeInHour < 24) {
            setGreeting("Good evening!");
        }
    }, [userTimeInHour])

    return (
        <>
            <h1>{greeting}</h1>
        </>
    )
}

export default Greeting;