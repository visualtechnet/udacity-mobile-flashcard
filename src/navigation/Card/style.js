import styled from 'styled-components'

export const CardView = styled.View`  
  padding: 10px;
  height: 100%;
`

export const CardQuestionView = styled.View`  
  display: flex;
  flex-direction: column;
  height: 100%;      
`

export const CardQuestion = styled.View`  
  flex: 1;  
  display: flex;
  justify-content: center;
  align-items: center;  
  
`

export const CardQuestionText = styled.Text`
  font-size: 36px;
  font-weight: bold;
`

export const CardCategory = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
`

export const ControlContainer = styled.View`
  flex: 1;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`

export const CardAnswer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const CardAnswerText = styled.Text`
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
`

export const CardQuestionAnswerView = styled.View`
  padding: 10px;
`

export const AnswerResultView = styled.View`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top-width: 1px;  
`
export const AnswerQuestion = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const AnswerQuestionSubText = styled.Text`
  font-size: 16px;
  font-style: italic;
`

export const AnswerQuestionCorrect = styled.Text`
  font-size: 16px;
  color: green;
`

export const AnswerQuestionIncorrect = styled.Text`
  font-size: 16px;
  color: red;
`

export const ResultView = styled.View`
  padding: 10px 0;
  display: flex;
  flexDirection: column;
  justify-content: flex-start;
  align-items: center;
`

export const ResultViewSummaryText = styled.Text`
  font-size: 16px;
`

export const ResultViewTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`