interface PersonProps{
    firstname: string
    lastname: string
    age: number
}

export default function InteractiveGreetings({firstname, lastname, age}: PersonProps){
        return(
        <div style={{ backgroundColor: "#d8bdb8", padding: "100px" }}>
            <p>Hello {firstname} {lastname},your age is {age}!</p>

            <p>{age>= 18 ? "You are an adult":"You are not an adult "}</p>
        </div>
    )
}