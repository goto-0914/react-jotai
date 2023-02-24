import { Suspense } from 'react';
import { atom, useAtom } from 'jotai';

const postId = atom(9001);

const postData = atom(async (get) => {
  const id = get(postId);
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  ).then((res) => res.json());
  return response;
});

const PostTitle = () => {
  const [{ by, title, url, text, time }] = useAtom(postData);
  return (
    <>
      <p>by: {by}</p>
      <p>date: {new Date(time * 1000).toLocaleDateString('en-US')}</p>
      {title && <p>title: {title}</p>}
      {url && <a href={url}>url: {url}</a>}
      <p>text: {text}</p>
    </>
  );
};

export const Demo2 = () => {
  const [id, setId] = useAtom(postId);

  return (
    <>
      <h2>Demo2 API通信で値を取得</h2>
      <div>
        <p>id: {id}</p>
        <button onClick={() => setId((x) => x + 1)}>
          <div>-&gt;</div>
        </button>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <PostTitle />
      </Suspense>
    </>
  );
};
