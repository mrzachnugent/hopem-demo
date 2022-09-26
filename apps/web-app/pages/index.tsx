import { Button } from '@hopem/ui-web';
import { trpc } from '../utils/trpc';

export default function WebApp() {
  const postQuery = trpc.post.all.useQuery();

  return (
    <div>
      <div>
        <code>https://www.app.mywebsite.com</code>
      </div>
      <Button />
      <h1 style={{ textAlign: 'center' }}>
        Data for end-to-end type safe serverless functions:
      </h1>
      {postQuery.data && (
        <div
          style={{
            boxShadow: '0px 0px 10px #00000050',
            borderRadius: 10,
            textAlign: 'center',
            padding: 20,
            marginInline: 'auto',
            width: 300,
          }}
        >
          {postQuery.data?.map((post) => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
