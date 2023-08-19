import Link from "next/link";

export default async function Sidebar({
  children,
  data,
  list_head,
  link_prefix,
}: {
  children: React.ReactNode;
  data: {
    id: string;
    base: string;
    coach_number: string;
    coach_type: string;
  }[];
  list_head: string;
  link_prefix: string;
}) {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-stretch">
          {/* Page content here */}
          <div className="shadow-md">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-sm sm:btn-md btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              Menu
            </label>
          </div>

          {/* main page content */}
          <div>{children}</div>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="text-xl text-center">{list_head}</li>
            <div className="divider"></div>
            {data.map((d) => (
              <li key={d.id}>
                <Link
                  href={`/${link_prefix}/${d.id}`}
                  className="uppercase text-base justify-center"
                >
                  {d.base}-{d.coach_number}-{d.coach_type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
