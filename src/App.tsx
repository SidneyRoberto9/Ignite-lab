import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <ul className="flex gap-4">
      {data?.lessons.map((lesson) => {
        return (
          <li className="mt-4 ml-4" key={lesson.id}>
            {lesson.title}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
