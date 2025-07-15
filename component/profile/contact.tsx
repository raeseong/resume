import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

export default function ProfileContact({
  payload,
}: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <div className="pb-2 d-flex align-items-center">
      <span style={{ width: '20px', textAlign: 'center', marginRight: '15px', marginLeft: '10px' }}>
        <FontAwesomeIcon icon={payload.icon} />
      </span>
      <span>{createLink(payload)}</span>
    </div>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return <Badge color="light">{payload.title || payload.link}</Badge>;
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
