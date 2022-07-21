import type { NextPage } from 'next';
import * as data from "../public/GamesData.json";
import {useEffect} from "react";
import DeterminantMenu from "../components/DeterninantMenu/DeterminantMenu";

const Home: NextPage = () => {
  useEffect(() => {
    return () => {
      console.log(data.length);
    };
  }, []);

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
        <DeterminantMenu/>
      </div>
    </div>
  )
}

export default Home
