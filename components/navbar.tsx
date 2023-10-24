import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href={"/"} as="/" className="btn btn-ghost normal-case text-xl">
          Records
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/staffs">
              Staffs
            </Link>
          </li>
          <li>
            <Link href="/add_coach">
              Add Coach
            </Link>
          </li>
          <li>
            <details className="w-32">
              <summary>Coaches</summary>
              <ul className="p-2 bg-base-100 z-40">
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
          </li>
        </ul>
      </div>
    </div>
  );
}
