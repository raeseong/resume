import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '환경 차이에 따른 오작동',
      subTitle: '에러페이지 캐싱, 응답 코드 처리 등의 오작동 해결',
      descriptions: [
        { content: '개발 환경에서 정상 작동하던 프로젝트가 운영 환경 배포시에 에러 발생' },
        { content: '운영 환경에서만 작동하는 로드 밸런서, 에러 발생 시 처리 로직이 있음을 확인'},
        { content: '에러 발생 시 안내 페이지 응답이 프론트에선 에러로 인식하지 않아 해당 페이지를 캐싱하는 1차적인 문제' },
        { content: 'Next build 리소스 버전 관리로 캐싱 문제 1차 해결' },
        { content: '브라우저 언어 설정이 한국어가 아닌 경우, 영문 페이지로 리다이렉팅하는 과정에서 운영 환경의 로드밸런서는 300번대 응답 코드를 unhealthy 상태로 체크' },
        { content: '로드 밸런서를 거치지 않고 클라이언트에서 처리하도록 수정' },
      ],
    },
    {
      title: 'AWS Lambda',
      subTitle: '인프라 구조 파악 및 문제 해결',
      descriptions: [
        { content: '결제 시스템을 MSA 아키텍처로 구축' },
        { content: '각 서비스가 AWS Lambda로 구축되었고 트랜잭션 처리를 해야하는데, cold start로 인한 지연 실행, 15분 timeout 제한, db 커넥션 관리 등의 이슈 발생' },
        { content: '각 요청별로 멱등키를 생성해서 중복 요청과 에러 발생을 방지' },
        { content: '15분 timeout 제한이라 여유로울 것으로 판단했는데, api gateway는 90초 제한이 있어서 코드의 성능을 향상시키고, 무거운 요청은 청크 단위로 처리' },
        { content: 'singleton 패턴으로 같은 컨테이너 내에서는 하나만 연결되도록 커넥션을 관리' },
      ],
    },
  ],
};

export default presentation;
