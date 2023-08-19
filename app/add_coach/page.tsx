"use client";

import { AddCoachApiResponse } from "@/utils/types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";

export default function AddCoach() {
  const [showalert, setShowalert] = useState(false);
  const [data, setData] = useState<AddCoachApiResponse>();
  return (
    <div className="card shadow-lg p-2 w-96 mx-auto mt-2">
      <div className="card-title justify-center text-2xl">Add coach</div>
      <Formik
        initialValues={{
          coach_number: "",
          coach_type: "",
          base: "",
          rake_type: "",
        }}
        validationSchema={yup.object().shape({
          coach_number: yup.number().required(),
          coach_type: yup.string().required(),
          base: yup.string().required(),
          rake_type: yup.string().required(),
        })}
        onSubmit={async (values) => {
          const res = await fetch("/api/add_coach", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ values }),
          });

          if (res) {
            setShowalert(true);

            const d: AddCoachApiResponse = await res.json();
            setData(d);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="card-body">
              {showalert &&
                (data?.success ? (
                  <AlertComp success={true} />
                ) : (
                  <AlertComp success={false} message={data?.message!} />
                ))}
              <Field
                type="text"
                name="base"
                placeholder="Base"
                className="input input-bordered input-md"
              />
              <Field
                type="text"
                name="coach_number"
                placeholder="Coach Number"
                className="input input-bordered input-md"
              />
              <Field
                type="text"
                name="coach_type"
                placeholder="Coach Type"
                className="input input-bordered input-md"
              />
              <Field
                as="select"
                className="select select-bordered"
                name="rake_type"
                value={undefined}
              >
                <option value={undefined}>Pick category</option>
                <option value={"SG"}>SG</option>
                <option value={"GR"}>Garib Rath</option>
                <option value={"PANTRY"}>Pantry Car</option>
                <option value={"POWER"}>Power Car</option>
                <option value={"LHB"}>LHB</option>
              </Field>
            </div>
            <div className="card-actions justify-center">
              <button
                type="submit"
                className={
                  isSubmitting ? "btn btn-disabled" : "btn btn-primary"
                }
              >
                Submit
              </button>
              <button type="reset" className="btn btn-outline btn-warning">
                Reset
              </button>
            </div>
            <div className="px-2 font-semibold p-1 rounded-md">
              <ErrorMsgComp name="base" />
              <ErrorMsgComp name="coach_number" />
              <ErrorMsgComp name="coach_type" />
              <ErrorMsgComp name="rake_type" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function AlertComp(props: AddCoachApiResponse) {
  return (
    <div
      className={
        props.success ? "alert alert-success p-2" : "alert alert-error p-2"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {props.success ? (
        <span className="text-sm">Coach submitted</span>
      ) : (
        <span className="text-sm">{props.message}</span>
      )}
    </div>
  );
}

const ErrorMsgComp = ({ name }: { name: string }) => {
  return (
    <ErrorMessage name={name}>
      {(msg: string) => <div className="text-sm text-red-600">* {msg}</div>}
    </ErrorMessage>
  );
};
