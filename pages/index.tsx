import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Side bar Application</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen text-lg text-center">
        <Link href="/view">
          <div className="text-white cursor-pointer bg-sky-500 rounded-lg p-3 m-2 hover:bg-sky-400">
            View
          </div>
        </Link>
        <Link href="/edit">
          <div className="text-white cursor-pointer bg-sky-500 rounded-lg p-3 m-2 hover:bg-sky-400">
            Edit
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
