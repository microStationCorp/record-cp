import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-md flex items-center md:justify-between">
      <div className="flex-none">
        <Link href={"/"} as="/" className="btn btn-ghost normal-case text-lg">
          Records
        </Link>
      </div>

      <div className="flex-1 md:w-1/2 md:flex-none flex justify-between">
        <div className="px-1">
          <Link href="/staffs">Staffs</Link>
        </div>
        <div className="px-1">
          <Link href="/add_coach">Add Coach</Link>
        </div>

        <details className="dropdown dropdown-end">
          <summary className="px-1 btn-ghost cursor-pointer">Coaches</summary>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
          >
            <li>
              <Link href="/sg">SG</Link>
            </li>
            <li>
              <Link href="/lhb">LHB</Link>
            </li>
            <li>
              <Link href="/power_car">Power car</Link>
            </li>
            <li>
              <Link href="/garib_rath">Garib Rath</Link>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
