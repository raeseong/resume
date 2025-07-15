import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';
import { CommonDescription } from '../common/CommonDescription';
import { IPresentation } from './IPresentation';

export default function PresentationRow({
  payload,
}: PropsWithChildren<{ payload: IPresentation.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return (
          <div key={index.toString()}>
            {index > 0 ? <hr /> : ''}
            <Row>
              <Col sm={12}>
                {item.title ? <h4>{item.title}</h4> : ''}
                {item.subTitle ? <i style={{ color: '#868e96' }}>{item.subTitle}</i> : ''}
                {item.descriptions ? (
                  <CommonDescription
                    descriptions={item.descriptions}
                    option={{ padding: !!(item.title || item.subTitle) }}
                  />
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </div>
        );
      })}
    </EmptyRowCol>
  );
}
