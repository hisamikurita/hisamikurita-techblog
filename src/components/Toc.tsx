type Toc = {
  id?: string;
  title?: string;
};

export const Toc = ({ toc }: { toc: Toc[] }) => {
  return (
    <div className="rounded-xl bg-gray-100 px-5 py-4">
      <h2 className="text-lg font-bold">目次</h2>
      <ul className="mt-3 grid gap-2">
        {toc &&
          toc.map((data) => (
            <li key={data.id} className="text-sm">
              <a href={`#${data.id}`}>
                <span></span>
                {data.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
