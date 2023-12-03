"use client";

import { useEffect, useState } from "react";
import { getStaff, updateStaffAction } from "@/app/action";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Role, Staff } from "@prisma/client";

// edit function
export function EditButton({
  values,
}: {
  values: {
    staffId: string;
  };
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [staff, setStaff] = useState<Staff>();
  const [response, setResponse] = useState<boolean>(false);

  useEffect(() => {
    getStaff(values.staffId).then((res) => setStaff(res!));
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
          className="w-5 h-5 text-sky-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="w-5/6 md:w-1/2">
            <div className="bg-white p-4 rounded-md ring-1">
              <div className="text-xl font-semibold text-center">
                Update Data
              </div>
              <div className="text-xl font-semibold text-center">Add Staff</div>
              {/* modal content */}
              <Formik
                initialValues={{
                  name: staff!.name,
                  designation: staff!.designation,
                  ticket_no: staff!.ticket_no,
                  employee_no: staff!.employee_no,
                  staff_role: staff!.staff_role,
                }}
                validationSchema={yup.object().shape({
                  name: yup.string().required(),
                  designation: yup.string().required(),
                  ticket_no: yup.number().required(),
                  employee_no: yup.number().required(),
                })}
                onSubmit={(value) => {
                  updateStaffAction({
                    ...value,
                    id: values.staffId,
                  }).then((res) => {
                    if (res) {
                      closeModal();
                    }
                  });
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <div className="py-4 flex justify-center flex-col items-center gap-2">
                      <Field
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered max-w-md w-full"
                      />
                      {errors.name && touched.name ? (
                        <div className="text-red-700">{errors.name}</div>
                      ) : null}
                      <Field
                        type="text"
                        name="designation"
                        placeholder="designation"
                        className="input input-bordered max-w-md w-full"
                      />
                      {errors.designation && touched.designation ? (
                        <div className="text-red-700">{errors.designation}</div>
                      ) : null}
                      <Field
                        type="text"
                        name="ticket_no"
                        placeholder="ticket number"
                        className="input input-bordered max-w-md w-full"
                      />
                      {errors.ticket_no && touched.ticket_no ? (
                        <div className="text-red-700">{errors.ticket_no}</div>
                      ) : null}
                      <Field
                        type="text"
                        name="employee_no"
                        placeholder="employee number"
                        className="input input-bordered max-w-md w-full"
                      />
                      {errors.employee_no && touched.employee_no ? (
                        <div className="text-red-700">{errors.employee_no}</div>
                      ) : null}
                      <Field
                        name="staff_role"
                        component="select"
                        className="select w-full select-bordered"
                      >
                        <option value={Role.SRTECH}>Sr.Tech</option>
                        <option value={Role.ACF}>ACF</option>
                        <option value={Role.ACH}>ACH</option>
                        <option value={Role.OED}>OED</option>
                      </Field>
                      {errors.ticket_no && touched.staff_role ? (
                        <div className="text-red-700">{errors.staff_role}</div>
                      ) : null}
                    </div>
                    {/* modal action */}
                    <div className="flex gap-2 justify-around">
                      <button
                        type="submit"
                        className="btn bg-green-200 text-green-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          "Update"
                        )}
                      </button>
                      <button
                        className="btn bg-slate-200 text-slate-700"
                        onClick={closeModal}
                      >
                        close
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
