import {useState} from 'react';

export default function InteractiveGreeting(){
    const [name,setName] = useState("No name");
    const [age,setAge]= useState(0);
    const [location,setLocation]= useState("No location");
    const [fare,setFare]= useState(0);

    function updateDetails(){
        let price = 0
        
        if (location == "Winchester") price = 3;
        if (location== "Salisbury") price = 5;
        if (location == "London") price = 15;

        if (age <18){
            price = price/2;

        }
        setFare(price)
    }
    function voteMessage(){
        if(age<0) return "Invalid age"
        if(age< 18 ) return "You are NOT old enough to vote "
        return "You are old enough to vote"
    }
    return(
        <div>
            <h2>User Details</h2>
            Name:
            <input type='text' onChange={(Event)=>setName(Event.target.value)}/>
        
            Age:
            <input type='number' onChange={(Event)=>setAge(parseInt(Event.target.value))}/>

            location:
            <select onChange={(Event)=>setLocation(Event.target.value)}>

            <option>Winchester</option>
            <option>Salisbury</option>
            <option>London</option>
            </select>

            <button onClick={updateDetails}>Go</button>

            <div>
                <p>Your name is {name},and your fare is {fare}</p>
                <div style={{backgroundColor:age<18?"red":"green",padding:"100px"}}>
                    {voteMessage()}
                </div>
            </div>

        </div>


    )
}