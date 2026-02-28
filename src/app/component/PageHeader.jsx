"use client";

import Link from "next/link";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* Page Header Box */}
            <div className="page-header-box">
              <h1
                className="text-anime-style-2"
                data-cursor="-opaque"
              >
                {title}
              </h1>

              {/* <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">home</Link>
                  </li>

                  {breadcrumb && (
                    <li
                      className="active"
                    >
                      {breadcrumb}
                    </li>
                  )}
                </ol>
              </nav> */}
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
  );
}
