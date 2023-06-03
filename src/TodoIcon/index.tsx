import React, { ReactElement } from 'react';
import CheckSVG  from './check.svg';
import DeleteSVG from './delete.svg';

type IconType = 'check' | 'delete';

interface TodoIconProps {
  type: IconType;
  color: string;
  onClick: () => void;
}

const iconComponents: Record<IconType, (color: string) => ReactElement> = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }: TodoIconProps): ReactElement {
  const IconComponent = iconComponents[type];

  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {IconComponent && IconComponent(color)}
    </span>
  );
}

export { TodoIcon };