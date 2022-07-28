import { LockClosedIcon, CakeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { addGuest } from "../../services/firebase";
export default function CreateGuest() {
  const [invitedBy, setInvitedBy] = useState("iverson");
  const [name, setName] = useState(String);
  const [phone, setPhone] = useState(String);

  async function handleAddGuest(e) {
    e.preventDefault();
    if (!name || !phone) return alert("Preencha todos os campos!");
    const result = await addGuest(name, phone, invitedBy);
    console.log(result);
  }
  return (
    <>
      <div className="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="w-full  ">
              <CakeIcon className="mx-auto" color="blue" width={100} />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Criar a sua lista de convidados
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ou{" "}
              <a
                href="/admin/list"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Ver candidatos na lista
              </a>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleAddGuest}
          >
            <input type="hidden" name="name" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nome do convidado"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  autoComplete="phone"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Número de telefone"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Convidado pelo:
                </a>
              </div>
              <div className="flex items-center">
                <input
                  id="birthday-person-1"
                  name="birthday-person-1"
                  type="checkbox"
                  value={"iverson"}
                  onChange={(evt) => setInvitedBy(evt.target.value)}
                  checked={invitedBy == "wanderson" ? false : true}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="birthday-person-1"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Iverson
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="birthday-person-2"
                  name="birthday-person-2"
                  value={"wanderson"}
                  onChange={(evt) => setInvitedBy(evt.target.value)}
                  checked={invitedBy == "iverson" ? false : true}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="birthday-person-2"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Wanderson
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Adicionar á lista
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
