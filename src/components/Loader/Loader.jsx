import { treadmill } from 'ldrs'

treadmill.register()


import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <l-treadmill
        size="70"
        speed="1.25" 
        color="#FFC531" 
    ></l-treadmill>
    </div>
  );
}