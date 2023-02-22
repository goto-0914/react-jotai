import { atom, useAtom } from 'jotai';

const textAtom = atom('hello');
const textLengthAtom = atom((get) => get(textAtom).length);
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

export const Demo1 = () => {
  const [text, setText] = useAtom(textAtom);
  const [textLength] = useAtom(textLengthAtom);
  const [uppercase] = useAtom(uppercaseAtom);
  return (
    <>
      <h2>Demo1 文字数取得、大文字変換</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Length: {textLength}</p>
      <p>Uppercase: {uppercase}</p>
    </>
  );
};
