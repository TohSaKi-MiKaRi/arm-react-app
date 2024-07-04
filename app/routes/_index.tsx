import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <hr />
      <h1 className="text-3xl">My Profile</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Name: Parit Pholnikorn</li>
        <li>Class: Information Technology</li>
        <li>
          Email: 
          <a href="mailto:parit_pho@rmutto.ac.th">
            <img src="/images/2.jpg" alt="Contact me." style={{ width: "100px", height: "100px" }} />
          </a>
        </li>
        <li>MY Picture</li>
        <img src="/images/3.jpg" alt="Contact me." style={{ width: "500px", height: "500px" }} />
      </ul>
    </div>
  );
}