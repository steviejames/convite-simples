import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies, setCookie, destroyCookie } from "nookies";

import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { confirmPresence, addGuest } from "../services/firebase";
import Router from "next/router";
const Home: NextPage = () => {
  const [phone, setPhone] = useState(String);
  const [err, setErr] = useState(String);
  const handlePhone = (number: string) => {
    const regex = new RegExp("^[0-9]*$");

    if (regex.test(number) !== false && number.length < 10) {
      setPhone(number);
    } else {
    }
  };
  function verifyCookie() {
    const { "convite-simples": cookie } = parseCookies();
    if (cookie) {
      Router.push("/confirmed");
    }
  }
  useEffect(() => {
    verifyCookie();
  }, []);

  const handleConfirmation = async () => {
    if (!phone) {
      return setErr(
        "Insira o seu número de telefone para fazer a confirmação."
      );
    }
    const result = await confirmPresence(phone, "confirm");

    if (result) {
      alert("Presença confirmada");
      setCookie(null, "convite-simples", phone, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      Router.push("/confirmed");
    } else {
      return setErr("Infelizmente o número não consta da lista.");
    }
  };

  const location = {
    lat: "-8.9728236",
    long: "13.1502776",
  };

  const mapMapUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat}%2C${location.long}`;
  return (
    <div className="flex text-white flex-col main-container items-center justify-center min-h-screen ">
      <Head>
        <title>Convite simples</title>
        <link rel="icon" href="/tapago.svg" />
      </Head>

      <main className="flex flex-col max-w-md justify-start  pt-14 px-5 flex-1 w-full text-center">
        <div className="flex justify-between font-bold text-lg">
          <p>IV</p>
          <p>WA</p>
        </div>
        <h1 className="font-extrabold text-2xl shadow mt-4">PARTY</h1>
        <div className="flex flex-col align-middle space-y-2 mt-6">
          <p className="uppercase font-semibold text-lg">31/06</p>
          <p className="uppercase font-semibold text-md">18:00</p>
          <p className="uppercase font-semibold underline underline-offset-2 pt-6 text-lg">
            SAVE THE DATE!
          </p>
          <p className="uppercase font-semibold text-lg">CUZ</p>
          <p className="uppercase font-semibold text-lg">YOU ARE INVITED</p>
        </div>
        <div className="flex flex-col  mt-8">
          <label htmlFor="phone" className="text-md  text-slate-500 text-left">
            Número de telefone
          </label>
          <input
            className="p-0 py-1 pt-2  outline-none bg-transparent border-white border-x-transparent border-t-transparent placeholder:text-gray-300 border-b text-white"
            type="tel"
            onFocus={() => setErr("")}
            onChange={(e) => handlePhone(e.target.value)}
            placeholder="Por favor insira o seu número de telefone"
            value={phone}
          />
          <span className="text-md text-left mt-8 text-red-400">
            {err && `*${err}`}
          </span>
          <div
            onClick={handleConfirmation}
            className="border-2 lg:w-full hover:bg-white cursor-pointer transition-all hover:text-black mt-5 p-5 mx-auto border-white flex flex-1 justify-center align-middle"
          >
            Confirmar Presença
          </div>
        </div>
        <div>
          <div className="mt-16 flex items-start">
            <span className="mr-2 h-10 w-10">
              <LocationMarkerIcon width={30} color="red" />
            </span>
            <p className="text-justify  relative ">
              Benfica, sentido kilamba, segunda rua (f) após a fábrica de
              blocos.
              <a
                className="text-justify  bottom-0 border-b border-slate-500 font-medium ml-1 text-slate-500 right-0 "
                href={mapMapUrl}
              >
                {" "}
                Abrir mapa
              </a>
            </p>
          </div>
          <div className="mt-10  flex py-2 bottom-0 left-0 right-0 items-center justify-center bg-black">
            <span className="mr-2">
              <PhoneIcon width={20} />
            </span>
            <p className="">+244 923492663</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
