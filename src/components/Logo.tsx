import { FC } from 'react';
import s from './logo.module.scss';

type Props = {
  className?: string;
};

export const Logo: FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h1 className={s.logo}>
        <span>The Trajectory</span>
        <span>Of</span>
        <span>Money</span>
      </h1>
    </div>
  )
}
