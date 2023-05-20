import { useState } from "react";
import ContentSection from "./ContentSection";
import CountdownTimer from "./CountdownTimer";
import Header from "./Header";
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';
import Cake from "./Cake";

function App() {
  const countToDate = new Date("2023-05-21")
  countToDate.setHours(countToDate.getHours() + 5)
  const [cheyenneIsThirty, setCheyenneIsThirty] = useState(countToDate < new Date())
  const { width, height } = useWindowSize()

  return (<>
    <Header 
      cheyenneIsThirty={cheyenneIsThirty} 
    />
    {cheyenneIsThirty && 
      <>
        <Cake />
        <Confetti 
          width={width - 20}
          height={height}
        />
      </>
    }
    <CountdownTimer 
      countToDate={countToDate}
      cheyenneIsThirty={cheyenneIsThirty} 
      setCheyenneIsThirty={setCheyenneIsThirty}
    />
    <ContentSection />
  </>)
}

export default App;
