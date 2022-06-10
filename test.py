score = ['87', '9^6', '80%', '5k0']
# score 숫자, 특수기호 있을 때, 문자 껴 있을 때 예시
print(score)

new_score = []
# 새 score set 담을 리스트

for score_now in score:
    score_fixed = ''
    # 숫자처리한 score 담을 score_fixed
    for letter in score_now:
        # 지금 보고 있는 score_now의 각 문자 확인
        if letter.isdigit():
            # 만약 지금 문자가 숫자면
            score_fixed += letter
            # score_fixed에 지금 숫자 추가
    new_score.append(score_fixed)
    # new_score 리스트에 숫자 처리한 score 추가

print(new_score)
