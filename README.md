# 단위 변환기

- 여러 가지 카테고리의 값의 단위를 변환하는 기능을 한다.
- 단위1, 단위2, 단위1의 값, 단위2의 값은 모두 사용자가 변경 가능.
- 단위1과 단위2는 같은 단위일 수 없다(같은 단위 선택 시 swap과 같은 효과).
- 단위1의 값과 단위2의 값은 숫자만 입력 가능하다.
- 단위 변경 시 단위1의 값을 기준으로 단위2의 값을 변경하는 것을 기본으로 한다.
- 단위1의 값 변경 시 단위2의 값 실시간 변경, 단위2의 값 변경 시 단위1의 값 실시간 변경
- 각 단위에 대하여 기본값이 다르다. => ex) 길이: 1 km, 온도: 0 °C, ...

## 구현한 단위

- [ 길이 ]: 킬로미터, 미터, 센티미터, 밀리미터, 마이크로미터, 나노미터, 마일, 야드, 피트, 인치, 해리리
- [ 온도 ]: 섭씨, 화씨, 켈빈

## Deploying

- [ Vercel ]: https://unit-converter-sepia-nine.vercel.app/
- [ Netlify ]: https://barleymilk-unit-converter.netlify.app/
- [ AWS amplify ]: https://main.d8bniunuu4m4x.amplifyapp.com/
