"use client";

import { deleteStaffAction } from "@/app/action";
import { useState } from "react";
import { mutate } from "swr";

export function DeleteButton({
  values,
}: {
  values: {
    staffId: string;
  };
}) {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const DeleteFunc = (staffId: string) => {
    deleteStaffAction(staffId).then((res) => {
      if (res) {
        setLoading(false);
        closeModal();
      }
    });
  };

  return (
    <>
      <button className="btn btn-sm" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="w-5/6 md:w-1/2">
            <div className="bg-white p-4 rounded-md ring-1">
              <div className="text-xl font-semibold text-center">
                Do you want to delete ?
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="btn-square bg-red-200 text-red-600 mr-4 rounded-md"
                  onClick={() => {
                    DeleteFunc(values.staffId);
                    setLoading(true);
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Yes"
                  )}
                </button>
                <button
                  className="btn-square bg-green-200 text-green-600 ml-4 rounded-md"
                  onClick={closeModal}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
