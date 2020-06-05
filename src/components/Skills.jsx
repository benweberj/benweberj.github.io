import React from 'react'
import styled from 'styled-components'

import Text from './Text'

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    &.other { margin-left: 1rem }
    border: 1px dashed red; 
  }
`

const SkillList = styled.div`
  * {
    color: ${props => props.theme.complement}66;
  }
`
// const Sep = styled.span`
//   color: ${props => props.theme.accent};
//   /* transform: translateY(-3px); */
//   margin: 0 1rem 0 .5rem;
//   font-size: 1.5rem;
//   display: none;
// `

const Mony = styled.span`
  color: #9989;
  font-style: italic;
  font-weight: 200;
  transform: translateY(-2px);
  display: inline-block;
  margin-left: 1rem;
  
  @media only screen and (max-width: 1350px) {
    margin: 0;
    display: block; 
  }
`

const Other = styled.div`

`

export default function Skills (props) {
  return (
    <Root>
      <div>
        <Text type='h2'>Web Development</Text>
        <SkillList>
          <Text type='h3'>HTML<Mony>Ben is pretty good at doing this. - Austin</Mony></Text>
          <Text type='h3'>CSS<Mony>Ben writes really cool styles. I like using his styles! - NaN</Mony></Text>
          <Text type='h3'>JS<Mony>What can I say, he's pretty good at it. - Tyler</Mony></Text>
          <Text type='h3'>React<Mony>When Ben passes props to components, its tight. - Emily</Mony></Text>
          <Text type='h3'>p5<Mony>Have you seen his animations? They're </Mony></Text>
        </SkillList>
      </div>

      <div className='other'>
        <Text type='h2'>ashflkahsdfhads</Text>
        <SkillList>
          <Text type='h3'>Java<Mony>He's actually not the best at Java. He's good, just not the best - Mom</Mony></Text>
          <Text type='h3'>Kotlin<Mony>He made a few Android apps for a class and - Nick Cannon</Mony></Text>
        </SkillList>
      </div>
    </Root>
  )
}

/* //   ${breakpoint('sm')`
//     grid-template-columns: repeat(2, 1fr);
//   `} */