import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { confirmPresence, getGuest } from "../services/firebase";
const Home: NextPage = () => {
  const [phone, setPhone] = useState(String);
  const [guest, setGuest] = useState(Object);
  const [err, setErr] = useState(String);

  async function verifyCookie() {
    const { "convite-simples": cookie } = parseCookies();
    if (cookie) {
      const guest = await getGuest(cookie);
      setGuest(guest);
      setPhone(guest?.phone);
    } else {
      Router.push("/");
    }
  }
  useEffect(() => {
    verifyCookie();
  }, [phone]);

  const cancelConfirmation = async () => {
    const result = await confirmPresence(phone, "cancel");
    if (result) {
      destroyCookie(null, "convite-simples");
      alert(
        "Presença Desconfirmada: Lamentamos que não possar celebrar conosco."
      );
      setPhone("");
      return;
    } else {
      return setErr("Erro ao cancelar. Tente mais tarde!");
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
        <div className="flex flex-col align-middle space-y-5 mt-6">
          <p className="uppercase font-semibold text-lg">31/06</p>
          <p className="uppercase font-semibold underline underline-offset-2 pt-6 text-lg">
            SAVE THE DATE!
          </p>
          <p className="uppercase font-semibold text-lg">CUZ</p>
          <p className="uppercase font-semibold text-lg">YOU ARE INVITED</p>
        </div>
        <div className="flex flex-col  mt-8">
          <p>
            Olá {guest?.name}, obrigado por ter confirmado a sua presença. Nos
            vemos na festa!!!
          </p>
          <div
            onClick={cancelConfirmation}
            className="border-2 lg:w-full w-1/2 hover:bg-red-600 cursor-pointer transition-all text-red-500 mt-5 p-5 mx-auto border-red-500 flex flex-1 justify-center align-middle"
          >
            Desconfirmar
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
