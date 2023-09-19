import { styled } from "styled-components";

const DivStyle = styled.div`
  min-width: 240px;
  width: calc(max-content + 600px);
  max-width: 90vw;
  min-height: 180px;
  max-height: 80vh;
  padding: 0 20px;
  overflow-y: auto;
  font-size: 14px;
  text-align: left;
  h4 {
    font-size: 16px;
  }
`;

const HowThis = () => {
  return (
    <DivStyle>
      <p>
        환영합니다 여러분!
        <br />
        뉴트리션 앱을 100%활용하기 위한 안내 페이지입니다.
      </p>
      <br />

      <h4>1. 마이페이지😊</h4>
      <p>
        해당 페이지에서 식단 작성에 필요한 기본적인 신체정보 등록을 할 수
        있습니다
        <br />
        키, 몸무게, 활동량을 바탕으로 권장 섭취량을 계산 해 DB에 저장합니다
        <br />
        해당 정보는 식단 분석과 식단 추천받기에 사용됨으로 꼭 저장해 주세요!
      </p>
      <br />
      <h4>2, 식단관리 캘린더🤗</h4>
      <p>
        홈 하면의 캘린더에서 빈 날짜(숫자말고 빈 칸을 클릭해주세요!)를 클릭하면
        <br />
        식단관리: 해당날짜 버튼이 활성화 됩니다
        <br />
        (식단 관리를 바로 누르면 금일의 식단을 작성하실 수 있습니다.)
      </p>
      <br />
      <p>
        2-1 커스텀 식단 만들기 : 끼니를 추가하면 자동으로 해당 날짜에 적용됩니다
      </p>
      <p>
        2-2 저장한 식단 불러오기 : 선호 식단 저장 버튼은 식단 만들기 페이지에
        있습니다
      </p>
      <p>
        2-3 저장한 끼니 불러오기 : 선호 끼니 저장은 수정중인 끼니에서 버튼이
        활성화 됩니다
      </p>
      <p>2-4 끼니 삭제하기(breakfast 글자 옆에 버튼)</p>
      <p>
        2-5 식단 삭제하기 - 당일의 적용중인 식단을 삭제합니다(우측 아래 버튼)
      </p>
      <br />
      <h4>3. 식단 분석하기🧐</h4>
      <p>
        적용된 식단을 분석합니다. 분석 결과는 칼로리 평가와 탄단지 비율 평가로
        나뉩니다
      </p>
      <br />
      <h4>4. 식단 추천 받기😘</h4>
      <p>
        무엇을 먹을지 고민되시나요? 식단을 추천받으세요!
        <br />
        버튼을 누르면 자동으로 남은 빈 끼니가 추천 식단으로 채워 집니다
        <br />* 단 하루 권장량 대비 남은 끼니당 칼로리가 500보다 적으면 추천이
        불가능 합니다
      </p>
      <br />
      <h4>2. 뉴코 커뮤니티😍</h4>
      <p>
        캘린더에서 적용중인 식단이나, 저장해 놓은 선호 식단을 불러와 글을
        작성하고 공유할 수 있습니다
        <br />
        먹거나, 자랑하고 싶은 식단을 공유하세요!
        <br />
        기본적인 식단의 칼로리, 탄단지 비율이 표시됩니다.
        <br />
        또는 타인의 식단을 구경하고 마음에 드는 게시물이 있으면 추천해 주세요!
      </p>
    </DivStyle>
  );
};

export default HowThis;
