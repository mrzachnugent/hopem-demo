import { CSSProperties, useState } from 'react';

const STYLE: CSSProperties = {
  border: 'none',
  cursor: 'pointer',
  background:
    'linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%)',
  color: 'white',
  padding: '16px 40px',
  fontSize: 27,
  borderRadius: 7,
  boxShadow: '2px 2px 5px #00000050',
};

export const Button = () => {
  const [text, setText] = useState<
    'Shared Element' | 'Yes this can be shared between all web apps'
  >('Shared Element');

  function handleOnClick() {
    setText((prev) =>
      prev === 'Yes this can be shared between all web apps'
        ? 'Shared Element'
        : 'Yes this can be shared between all web apps'
    );
  }
  return (
    <button style={STYLE} onClick={handleOnClick}>
      {text}
    </button>
  );
};
