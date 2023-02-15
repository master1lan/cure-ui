import ReactDOM from 'react-dom/client';
import ButtonExample from '@src/button/example';
import InputExample from '@src/input/example';
import MessageExample from '@src/message/example';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { useState } from 'react';
import { Button } from '@src/index';
import ModalExample from '@src/modal/example';
import PopoverExample from '@src/popover/example';
import TooltipExample from '@src/tooltip/example';
const routerList: [string, EmotionJSX.Element][] = [
  ['button', <ButtonExample />],
  ['input', <InputExample />],
  ['message', <MessageExample />],
  ['modal', <ModalExample />],
  ['popover', <PopoverExample />],
  ['tooltip', <TooltipExample />],
];

function Router() {
  const [curIndex, set] = useState(0);
  return (
    <>
      <h1>example and test</h1>
      <div>
        <nav
          style={{
            display: 'flex',
            height: '50px',
            justifyContent: 'flex-start',
            justifyItems: 'center',
            columnGap: '20px',
          }}
        >
          {routerList.map((item, key) => (
            <Button key={key} onClick={() => set(() => key)} style={{}}>
              {item[0]}
            </Button>
          ))}
        </nav>
        <div>{routerList[curIndex][1]}</div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router />
);
