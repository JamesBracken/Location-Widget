import { useState, useEffect } from "react";

const Greeting = ({ userDateTime }: { userDateTime: Date }) => {

    const [greeting, setGreeting] = useState<string>("");

    useEffect(() => {
        if (userDateTime.getHours() >= 0 && userDateTime.getHours() < 12) {
            setGreeting("Good morning!");
        } else if (userDateTime.getHours() >= 12 && userDateTime.getHours() < 18) {
            setGreeting("Good Afternoon!");
        } else if (userDateTime.getHours() >= 18 && userDateTime.getHours() < 24) {
            setGreeting("Good evening!");
        }
    }, [userDateTime])

    return (
        <div className="greeting">
            <h1 className="greeting__heading">{greeting}</h1>
        </div>
    )
}

export default Greeting;