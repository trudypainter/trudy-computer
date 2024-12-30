import posts from '../posts.json';
import Link from 'next/link';

export default function Home() {
  const allProjects = posts.posts;

  return (
    <div className="p-8 font-dinamo">
      <h1 className="text-2xl mb-4 font-dinamo">Projects</h1>
      <ul className="space-y-2">
        {allProjects.map((project) => (
          <li key={project.title}>
            <Link
              href={`/projects/${project.slug}`}
              className="text-blue-600 hover:underline font-dinamo"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
