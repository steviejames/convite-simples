import React from "react";
import { InformationCircleIcon, XIcon } from "@heroicons/react/solid";
function Toast({ close, message }) {
  return (
    <div
      id="toast-default"
      className="flex items-center px-5 justify-between p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div className="flex items-center text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <InformationCircleIcon width={30} />
        <div className="ml-2 text-sm font-normal">{message}</div>
      </div>
      <button
        type="button"
        className="ml-auto mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={close}
      >
        <XIcon color="gray" width={18} />
      </button>
    </div>
  );
}

export default Toast;
