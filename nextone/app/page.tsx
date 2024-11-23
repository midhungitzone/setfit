import Image from "next/image";
import Datalist from "../components/datalisting";
import Datafields from "../components/datafields";
import Datemodal from "../components/datemodal"


export default function Home() {

  const api = fetch('https://scaling-space-couscous-694x5g4495pjh9jg-3000.app.github.dev/api/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' }) // Replace with your actual data
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));



   console.log (api) 

  return (
 //<Datalist />
<Datafields />
//<Datemodal/>
  );
}
