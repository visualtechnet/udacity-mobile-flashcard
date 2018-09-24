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
  flex: 3;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
`

export const CardAnswer = styled.View`
  flex: 2;
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