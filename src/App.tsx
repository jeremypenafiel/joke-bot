import './App.css'
import Header from "./folder/Header.tsx";
import BotResponse from "./folder/Bot Response.tsx";
import UserInputForm from "./folder/UserInputForm.tsx";
import OpenAI from "openai";

client =  new OpenAI(api_key="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")

function App() {

  return (
      <>
          <Header />
          <BotResponse />
          <UserInputForm />

      {/*    input box*/}
      </>
  )
}

export default App
