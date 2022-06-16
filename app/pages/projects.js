import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3">
        <Head>
          <title>My Portfolio - {projects.results?.length} Projects</title>
          <meta name="description" content="lucetre portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="pl-4 text-blue-500">
            {projects.results?.length}{" "}
          </span>
          projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-12 m-4 gap-8">
          {projects.results?.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DB_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
