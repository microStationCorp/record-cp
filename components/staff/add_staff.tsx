"use client";

import { addStaff } from "@/lib/staff/addStaff";
import { Role } from "@prisma/client";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { mutate } from "swr";
import * as yup from "yup";

export default function AddStaffComp() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="mt-4">
      <div className="text-center">
        <button
          className="btn btn-sm ring-2 ring-slate-700"
          onClick={openModal}
        >
          Add new Staff
        </button>
      </div>

      {/* The Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-5/6 md:w-1/2">
            <div className="bg-white p-4 rounded-md ring-1">
              {/* modal title */}
              <div className="text-xl font-semibold text-center">Add Staff</div>
              {/* modal content */}
              <Formik
                initialValues={{
                  name: "",
                  designation: "",
                  ticket_no: "",
                  employee_no: "",
                  staff_role: Role.ACF,
                }}
                validationSchema={yup.object().shape({
                  name: yup.string().required(),
                  designation: yup.string().required(),
                  ticket_no: yup.number().required(),
                  employee_no: yup.number().required(),
                })}
                onSubmit={async (values) => {
                  await addStaff({ values, closeModal });
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
                    </div>
                    {/* modal action */}
                    <div className="flex gap-2 justify-around">
                      <button
                        type="submit"
                        className="btn btn-sm ring-2 ring-slate-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <button
                        type="reset"
                        className="btn btn-sm ring-2 ring-slate-700"
                      >
                        reset
                      </button>
                      <button
                        className="btn btn-sm ring-2 ring-slate-700"
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
    </div>
  );
}
