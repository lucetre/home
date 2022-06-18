import Image from "next/image";

export default function ProjectItem({ data }) {
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url;
  const title = data.properties.Name?.title[0]?.plain_text;
  const description = data.properties.Description?.rich_text[0]?.plain_text;
  const startDate = data.properties.Date?.date?.start;
  const endDate = data.properties.Date?.date?.end;
  const github = data.properties.Github?.url;
  const youtube = data.properties.Youtube?.url;
  const page = data.properties.Page?.url;
  const presentation = data.properties.Presentation?.url;
  const colab = data.properties.Colab?.url;
  const tags = data.properties.Tags?.multi_select;
  const roles = data.properties.Roles?.multi_select;

  return (
    <div className="project-card max-w-sm">
      {imgSrc && (
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="image"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      )}

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm">
          {startDate}
          {startDate && endDate ? " ~ " : ""}
          {endDate}
        </p>
        <p className="mt-2 mb-1 text-justify text-sm">{description}</p>
        <div className="table-cell text-center mb-2">
          {page && (
            <div className="inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm">
              <a className="underline" href={page}>
                Page
              </a>
            </div>
          )}
          {github && (
            <div className="inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm">
              <a className="underline" href={github}>
                GitHub
              </a>
            </div>
          )}
          {youtube && (
            <div className="inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm">
              <a className="underline" href={youtube}>
                YouTube
              </a>
            </div>
          )}
          {presentation && (
            <div className="inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm">
              <a className="underline" href={presentation}>
                Presentation
              </a>
            </div>
          )}
          {colab && (
            <div className="inline-block px-1 py-1 mr-2 mt-1 rounded-md w-fit text-sm">
              <a className="underline" href={colab}>
                Colab
              </a>
            </div>
          )}
        </div>
        <div className="table-cell mb-2">
          {tags?.map((aTag) => (
            <h1
              className="inline-block px-2 py-1 mr-2 mt-1 rounded-md bg-sky-200 dark:bg-sky-700 w-fit text-xs"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
          {roles?.map((aRole) => (
            <h1
              className="inline-block px-2 py-1 mr-2 mt-1 rounded-md bg-emerald-200 dark:bg-emerald-700 w-fit text-xs"
              key={aRole.id}
            >
              {aRole.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
