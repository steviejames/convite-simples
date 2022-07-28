/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { listGuests } from "../../../services/firebase";
export default function List() {
  const [list, setList] = useState([]);
  const handleGuestList = async () => {
    const result = await listGuests();
    setList(result);
  };
  const route = useRouter();
  useEffect(() => {
    handleGuestList();
  }, []);
  return (
    <>
      <div className="bg-white shadow overflow-hidden mb-5 sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Festa de aniversário de @iverson e @wanderson
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lista de convidados
          </p>
        </div>
        <div className="border-t border-gray-200 overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs mt-5 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nome
                </th>
                <th scope="col" className="py-3 px-6">
                  Convidado por
                </th>
                <th scope="col" className="py-3 px-6">
                  Contato
                </th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 &&
                list.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="py-4 px-6">{item.invitedby}</td>
                    <td className="py-4 px-6">{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between">
        <a
          onClick={() => route.back()}
          className="px-5 cursor-pointer text-gray-700 "
        >
          Voltar
        </a>
        <a
          onClick={() => route.push("/admin")}
          className="px-5 cursor-pointer text-blue-500 font-medium"
        >
          Adicionar outro
        </a>
      </div>
    </>
  );
}
