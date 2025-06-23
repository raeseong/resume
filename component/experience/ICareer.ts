import { ICommon } from '../common/ICommon';

export declare namespace ICareer {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78032558-27540200-73a0-11ea-83cd-3fd1cea68402.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/career.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### Career 데이터 목록 */
    list: Item[];
    /** ### 총 경력 기간 표시 유/무 */
    disableTotalPeriod?: boolean;
  }

  export interface Item {
    /** ### (직장)경험 명 */
    title: string;

    /** ### (직장)역할 명 (or Subtitle) */
    position: string;

    /**
     * ### (직장)경험 시작 일
     *
     * @format YYYY-MM
     * @example "2018-02"
     */
    startedAt: string;
    /**
     * ### (직장)경험 종료 일
     *
     * @format YYYY-MM
     * @example "2021-02"
     * @description 해당 값이 undefined 일 경우 **"재직 중"** 뱃지가 추가로 나타난다.
     */
    endedAt?: string;
    /**
     * ### (직장)경험 설명
     *
     * @description 각 항목은 메인 설명과 하위 설명을 포함할 수 있습니다.
     */
    descriptions: DescriptionItem[];
    /**
     * ### (직장)경험의 키워드
     *
     * @description undefined 가 아닐 경우 해당 경험 하단에 **Skill Keywords** 목록이 추가된다.
     */
    skillKeywords?: string[];
  }

  export interface DescriptionItem {
    /** ### 메인 설명 */
    main: string;
    /** ### 하위 설명 목록 (선택사항) */
    subItems?: string[];
  }
}
